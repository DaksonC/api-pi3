import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DadosSimuladosModule } from './DadosSimulados/dados-simulados.module';

@Module({
  imports: [DadosSimuladosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
