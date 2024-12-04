import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import {
  RaffleCreateUsecase,
  RafflesSearchByUserUsecase,
  UpdateRaffleUsecase,
} from './usecases/raffle';
import { MongoModule } from 'src/infra/data/mongo/mongoose.module';
import { CreateUserUseCase } from './usecases/user';
import { SignInUsecase } from './usecases/auth';
import { ConfigService } from '@nestjs/config';
import { PostgresModule } from 'src/infra/data/postgreSQL/postgres.module';

const providers = [
  RaffleCreateUsecase,
  RafflesSearchByUserUsecase,
  UpdateRaffleUsecase,
  CreateUserUseCase,
  SignInUsecase,
];

@Module({
  imports: [
    MongoModule,
    PostgresModule,
    JwtModule.registerAsync({
      global: true,
      imports: [],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: +configService.get<number>('JWT_EXPIRATION_TIME'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers,
  exports: providers,
})
export class ApplicationModule {}
