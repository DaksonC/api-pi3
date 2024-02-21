import { Module } from '@nestjs/common';
import { SalvarDadosController } from './salvar-dados.controller';
import { SalvarDadosService } from './salvar-dados.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SalvarDadosController],
  providers: [SalvarDadosService],
})
export class SalvarDadosModule {}
