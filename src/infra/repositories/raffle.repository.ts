import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateRafleDto } from 'src/presentation/v1/dtos';
import { IRaffleRepository } from './abstractions/raffle.repository.interface';
import { Raffle, RaffleDocument } from '../data/mongo/entities';

export class RaffleRepository implements IRaffleRepository {
  constructor(
    @InjectModel(Raffle.name)
    private readonly raffleModel: Model<RaffleDocument>,
  ) {}

  async createRaffle(data: Raffle): Promise<Raffle> {
    const createdRaffle = new this.raffleModel(data);
    const savedRaffle = await createdRaffle.save();
    return savedRaffle;
  }

  async getRaffles(id: string): Promise<Raffle[]> {
    const raffle = this.raffleModel.find({ id }).exec();
    return raffle;
  }

  async updateRaffle(id: string, data: UpdateRafleDto): Promise<Raffle> {
    const raffle = this.raffleModel.findOneAndUpdate({ id }, data).exec();
    return raffle;
  }
}
