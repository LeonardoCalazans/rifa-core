import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateRaffleDto, RaffleDto, UpdateRafleDto } from '../dtos';
import {
  RaffleCreateUsecase,
  RafflesSearchByUserUsecase,
  UpdateRaffleUsecase,
} from 'src/application/usecases/raffle';
import { Raffle } from 'src/infra/data/mongo/entities';

@Controller({
  path: 'raffle',
  version: '1',
})
export class RaffleController {
  constructor(
    private readonly raffleCreateUseCase: RaffleCreateUsecase,
    private readonly rafflesSearchByUserUseCase: RafflesSearchByUserUsecase,
    private readonly reffleUpdateUseCase: UpdateRaffleUsecase,
  ) {}

  @Post()
  async createRaffle(@Body() raffle: CreateRaffleDto): Promise<Raffle> {
    try {
      return await this.raffleCreateUseCase.execute(raffle);
    } catch (error) {
      return error;
    }
  }

  @Get(':idUser')
  async getRaffles(@Param('idUser') idUser: string): Promise<RaffleDto[]> {
    try {
      const raffle = await this.rafflesSearchByUserUseCase.execute(idUser);
      return raffle;
    } catch (error) {
      return error;
    }
  }

  @Put(':idUser')
  async updateRaffle(
    @Param('idUser') idUser: string,
    @Body() raffle: UpdateRafleDto,
  ): Promise<RaffleDto> {
    try {
      const raffleUpdated = await this.reffleUpdateUseCase.execute(
        idUser,
        raffle,
      );
      return raffleUpdated;
    } catch (error) {
      return error;
    }
  }
}
