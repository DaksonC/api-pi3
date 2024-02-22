import { Controller, Get } from '@nestjs/common';
import { DadosSimuladosService } from './dados-simulados.service';
import { TemperaturaUmidade } from 'src/models/temperatura-umidade.model';

@Controller('dados')
export class DadosSimuladosController {
  constructor(private readonly dadosService: DadosSimuladosService) {}

  @Get('atual')
  async getDadosSimulados(): Promise<{ temperatura: number; umidade: number }> {
    return this.dadosService.getDadosSimulados();
  }

  @Get('historico')
  async getHistorico(): Promise<TemperaturaUmidade[]> {
    return this.dadosService.getHistorico();
  }
}
