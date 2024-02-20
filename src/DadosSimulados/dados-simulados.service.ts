import { Injectable } from '@nestjs/common';

@Injectable()
export class DadosSimuladosService {
  getDadosSimulados(): { temperatura: number; umidade: number } {
    const temperatura = this.gerarNumeroAleatorio(20, 30);
    const umidade = this.gerarNumeroAleatorio(40, 60);
    return { temperatura, umidade };
  }

  private gerarNumeroAleatorio(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
