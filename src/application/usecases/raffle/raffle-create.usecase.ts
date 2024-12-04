import { Injectable } from '@nestjs/common';
import { Raffle } from 'src/infra/data/mongo/entities';
import { IRaffleRepository } from 'src/infra/data/mongo/abstractions/raffle.repository.interface';
import { CreateRaffleDto } from 'src/presentation/v1/dtos';

@Injectable()
export class RaffleCreateUsecase {
  constructor(private readonly raffleRepository: IRaffleRepository) {}

  async execute(raffle: CreateRaffleDto): Promise<Raffle> {
    try {
      const response = await this.raffleRepository.createRaffle(raffle);
      return response;
    } catch (error) {
      return error;
    }
  }
}
