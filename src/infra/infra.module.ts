import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RaffleSchema, Raffle } from './data/mongo/entities';
import { RaffleRepository } from './repositories';
import { IRaffleRepository } from './repositories/abstractions/raffle.repository.interface';
const providers = [
  // {
  //   provide: IRaffleService,
  //   useClass: RaffleService,
  // },
  {
    provide: IRaffleRepository,
    useClass: RaffleRepository,
  },
];

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Raffle.name, schema: RaffleSchema }]),
  ],
  providers,
  exports: providers,
})
export class DomainModule {}
