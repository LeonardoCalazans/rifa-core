import {
  CreateRaffleDto,
  CreateRaffleResponseDto,
  RaffleDto,
  UpdateRafleDto,
} from 'src/presentation/v1/dtos';

export abstract class IRaffleRepository {
  abstract createRaffle(
    data: CreateRaffleDto,
  ): Promise<CreateRaffleResponseDto>;
  abstract getRaffles(idUser: string): Promise<RaffleDto[]>;
  abstract updateRaffle(
    idUser: string,
    data: UpdateRafleDto,
  ): Promise<RaffleDto>;
}
