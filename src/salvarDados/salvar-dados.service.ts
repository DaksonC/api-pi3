import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalvarDadosService {
  constructor(private readonly prisma: PrismaService) {}

  async salvarDadosTemperaturaUmidade(temperatura: number, umidade: number) {
    return await this.prisma.dadosTemperaturaUmidade.create({
      data: {
        temperatura,
        umidade,
        horario: new Date(), // Use o horário atual
      },
    });
  }

  async getDadosUltimos7Dias() {
    const dataAtual = new Date();
    const dataInicial = new Date(dataAtual);
    dataInicial.setDate(dataInicial.getDate() - 7); // Subtrai 7 dias da data atual

    return await this.prisma.dadosTemperaturaUmidade.findMany({
      where: {
        horario: {
          gte: new Date(
            dataInicial.getFullYear(),
            dataInicial.getMonth(),
            dataInicial.getDate(),
            12,
            0,
            0,
          ), // Data inicial com horário 12:00
          lt: new Date(
            dataAtual.getFullYear(),
            dataAtual.getMonth(),
            dataAtual.getDate(),
            12,
            0,
            0,
          ), // Data atual com horário 12:00
        },
      },
      orderBy: {
        horario: 'desc', // Ordena por ordem decrescente
      },
    });
  }
}
