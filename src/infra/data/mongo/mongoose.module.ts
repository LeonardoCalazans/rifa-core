import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RaffleSchema, Raffle, User, UserSchema } from './entities';
import { RaffleRepository } from './repositories';
import { IRaffleRepository } from './abstractions/raffle.repository.interface';
import { IUserRepository } from './abstractions/user.repository.interface';
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
export class MongoModule {}
