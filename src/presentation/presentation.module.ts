import { Module } from '@nestjs/common';
import { RaffleController } from './v1/raffle/raffle.controller';
import { ApplicationModule } from 'src/application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [RaffleController],
})
export class PresentationModule {}
