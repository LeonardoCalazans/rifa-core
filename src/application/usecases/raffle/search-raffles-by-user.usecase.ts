import { Injectable } from '@nestjs/common';
import { IRaffleRepository } from 'src/infra/repositories/abstractions/raffle.repository.interface';
import { RaffleDto } from 'src/presentation/v1/dtos';
@Injectable()
export class RafflesSearchByUserUsecase {
  constructor(private readonly raffleRepository: IRaffleRepository) {}

  async execute(idUser: string): Promise<RaffleDto[]> {
    return await this.raffleRepository.getRaffles(idUser);
  }
}
