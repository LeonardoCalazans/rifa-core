import { Injectable } from '@nestjs/common';
import { Raffle } from 'src/infra/data/mongo/entities';
import { IRaffleRepository } from 'src/infra/repositories/abstractions/raffle.repository.interface';
@Injectable()
export class RafflesSearchByUserUsecase {
  constructor(private readonly raffleRepository: IRaffleRepository) {}

  async execute(idUser: string): Promise<Raffle[]> {
    return await this.raffleRepository.getRaffles(idUser);
  }
}
