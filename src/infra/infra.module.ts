import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RaffleSchema, Raffle, User, UserSchema } from './data/mongo/entities';
import { RaffleRepository } from './repositories';
import { IRaffleRepository } from './repositories/abstractions/raffle.repository.interface';
import { IUserRepository } from './repositories/abstractions/user.repository.interface';
import { UserRepository } from './repositories/user.repository';

const providers = [
  {
    provide: IRaffleRepository,
    useClass: RaffleRepository,
  },
  {
    provide: IUserRepository,
    useClass: UserRepository,
  },
];

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Raffle.name, schema: RaffleSchema },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers,
  exports: providers,
})
export class DomainModule {}
