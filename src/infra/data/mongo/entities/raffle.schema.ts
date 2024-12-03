import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'raffles',
})
export class Raffle {
  @Prop({ unique: true })
  id: string;

  @Prop()
  idUser: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  maximunNumberRaffles: number;

  @Prop()
  selectedNumbers: number[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type RaffleDocument = HydratedDocument<Raffle>;
export const RaffleSchema = SchemaFactory.createForClass(Raffle);
