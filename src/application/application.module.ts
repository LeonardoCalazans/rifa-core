import { Module } from '@nestjs/common';
import {
  RaffleCreateUsecase,
  RafflesSearchByUserUsecase,
  UpdateRaffleUsecase,
} from './usecases/raffle';
import { DomainModule } from 'src/infra/infra.module';

const providers = [
  RaffleCreateUsecase,
  RafflesSearchByUserUsecase,
  UpdateRaffleUsecase,
];
@Module({
  imports: [DomainModule],
  providers,
  exports: providers,
})
export class ApplicationModule {}
