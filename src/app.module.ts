import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DadosSimuladosModule } from './DadosSimulados/dados-simulados.module';
import { SalvarDadosModule } from './salvarDados/salvar-dados.module';

@Module({
  imports: [DadosSimuladosModule, SalvarDadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
