import { Module } from '@nestjs/common';
import { DadosSimuladosService } from './dados-simulados.service';
import { DadosSimuladosController } from './dados-simulados.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TemperaturaUmidade,
  TemperaturaUmidadeSchema,
} from 'src/models/temperatura-umidade.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TemperaturaUmidade.name, schema: TemperaturaUmidadeSchema },
    ]),
  ],
  exports: [MongooseModule],
  controllers: [DadosSimuladosController],
  providers: [DadosSimuladosService],
})
export class DadosSimuladosModule {}
