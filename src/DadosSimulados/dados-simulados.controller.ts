import { Controller, Get } from '@nestjs/common';
import { DadosSimuladosService } from './dados-simulados.service';

@Controller('dados')
export class DadosSimuladosController {
  constructor(private readonly dadosService: DadosSimuladosService) {}

  @Get()
  getDadosSimulados(): { temperatura: number; umidade: number } {
    return this.dadosService.getDadosSimulados();
  }
}
