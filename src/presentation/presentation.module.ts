import { Module } from '@nestjs/common';
import { RaffleController } from './v1/raffle/raffle.controller';
import { ApplicationModule } from 'src/application/application.module';
import { UserController } from './v1/user/user.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [RaffleController, UserController],
})
export class PresentationModule {}
