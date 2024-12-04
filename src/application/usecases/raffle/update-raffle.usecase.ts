import { Injectable } from '@nestjs/common';
import { IRaffleRepository } from 'src/infra/data/mongo/abstractions/raffle.repository.interface';
import { UpdateRafleDto, RaffleDto } from 'src/presentation/v1/dtos';

@Injectable()
export class UpdateRaffleUsecase {
  constructor(private readonly raffleRepository: IRaffleRepository) {}

  async execute(idUser: string, raffle: UpdateRafleDto): Promise<RaffleDto> {
    try {
      return await this.raffleRepository.updateRaffle(idUser, raffle);
    } catch (error) {
      return error;
    }
  }
}
