import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TemperaturaUmidadeDocument = TemperaturaUmidade & Document;

@Schema()
export class TemperaturaUmidade {
  @Prop()
  temperatura: number;

  @Prop()
  umidade: number;

  @Prop({ type: Date, default: Date.now })
  data: Date;
}

export const TemperaturaUmidadeSchema =
  SchemaFactory.createForClass(TemperaturaUmidade);
