import { Module } from '@nestjs/common';
import { RaffleController } from './v1/raffle/raffle.controller';
import { ApplicationModule } from 'src/application/application.module';
import { UserController } from './v1/user/user.controller';
import { AuthController } from './v1/auth/auth.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [RaffleController, UserController, AuthController],
})
export class PresentationModule {}
