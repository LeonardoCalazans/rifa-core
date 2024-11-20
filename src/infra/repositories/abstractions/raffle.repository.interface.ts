import { Raffle } from 'src/infra/data/mongo/entities';
import { UpdateRafleDto } from 'src/presentation/v1/dtos';

export abstract class IRaffleRepository {
  abstract createRaffle(data: Raffle): Promise<Raffle>;
  abstract getRaffles(id: string): Promise<Raffle[]>;
  abstract updateRaffle(id: string, data: UpdateRafleDto): Promise<Raffle>;
}
