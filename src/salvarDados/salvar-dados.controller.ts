import { Controller, Post, Get, Body } from '@nestjs/common';
import { SalvarDadosService } from './salvar-dados.service';

@Controller('dados')
export class SalvarDadosController {
  constructor(private readonly dadosService: SalvarDadosService) {}

  @Post()
  async salvarDadosTemperaturaUmidade(
    @Body('temperatura') temperatura: number,
    @Body('umidade') umidade: number,
  ) {
    return await this.dadosService.salvarDadosTemperaturaUmidade(
      temperatura,
      umidade,
    );
  }

  @Get('ultimos-7-dias')
  async getDadosUltimos7Dias() {
    return await this.dadosService.getDadosUltimos7Dias();
  }
}
