import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreateRaffleDto,
  CreateRaffleResponseDto,
  RaffleDto,
  UpdateRafleDto,
} from 'src/presentation/v1/dtos';
import { IRaffleRepository } from '../abstractions/raffle.repository.interface';
import { Raffle, RaffleDocument } from '../entities';

export class RaffleRepository implements IRaffleRepository {
  constructor(
    @InjectModel(Raffle.name)
    private readonly raffleModel: Model<RaffleDocument>,
  ) {}

  async createRaffle(data: CreateRaffleDto): Promise<CreateRaffleResponseDto> {
    const createdRaffle = new this.raffleModel(data);
    const savedRaffle = await createdRaffle.save();
    return savedRaffle;
  }

  async getRaffles(idUser: string): Promise<RaffleDto[]> {
    const raffle = await this.raffleModel.find({ idUser }).exec();
    return raffle;
  }

  async updateRaffle(idUser: string, data: UpdateRafleDto): Promise<RaffleDto> {
    const raffle = await this.raffleModel
      .findOneAndUpdate(
        {
          _id: data.id,
          idUser: idUser,
        },
        {
          ...data,
        },
      )
      .exec();

    return raffle;
  }
}
