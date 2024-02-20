// dados-simulados.module.ts
import { Module } from '@nestjs/common';
import { DadosSimuladosService } from './dados-simulados.service';
import { DadosSimuladosController } from './dados-simulados.controller';

@Module({
  controllers: [DadosSimuladosController],
  providers: [DadosSimuladosService],
})
export class DadosSimuladosModule {}
