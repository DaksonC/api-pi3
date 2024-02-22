import { Injectable } from '@nestjs/common';
import {
  TemperaturaUmidade,
  TemperaturaUmidadeDocument,
} from '../models/temperatura-umidade.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DadosSimuladosService {
  constructor(
    @InjectModel(TemperaturaUmidade.name)
    private temperaturaUmidadeModel: Model<TemperaturaUmidadeDocument>,
  ) {
    setInterval(() => {
      this.salvarDadosAutomaticamente();
    }, 1000);
  }

  async getDadosSimulados(): Promise<{ temperatura: number; umidade: number }> {
    const temperatura = this.gerarNumeroAleatorio(20, 30);
    const umidade = this.gerarNumeroAleatorio(40, 60);
    await this.salvarDadosNoBanco(temperatura, umidade);

    return { temperatura, umidade };
  }

  async getHistorico(): Promise<
    { temperatura: number; umidade: number; data: Date }[]
  > {
    const historico = await this.temperaturaUmidadeModel.find().exec();
    return historico.map((entry) => ({
      temperatura: entry.temperatura,
      umidade: entry.umidade,
      data: entry.data,
    }));
  }

  private gerarNumeroAleatorio(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private async salvarDadosNoBanco(
    temperatura: number,
    umidade: number,
  ): Promise<void> {
    const novoRegistro = new this.temperaturaUmidadeModel({
      temperatura,
      umidade,
    });
    await novoRegistro.save();
  }

  private async salvarDadosAutomaticamente(): Promise<void> {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Verifica se é 14:50:00 às 14:50:05 para salvar os dados
    if (hours === 14 && minutes === 53 && seconds >= 0 && seconds <= 1) {
      const temperatura = this.gerarNumeroAleatorio(20, 30);
      const umidade = this.gerarNumeroAleatorio(40, 60);
      await this.salvarDadosNoBanco(temperatura, umidade);
    }
  }
}
