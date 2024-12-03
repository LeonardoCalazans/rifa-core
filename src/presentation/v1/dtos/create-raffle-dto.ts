import { IsUUID, IsString, MinLength, IsNumber } from 'class-validator';

export class CreateRaffleDto {
  @IsUUID()
  idUser: string;

  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(5)
  description: string;

  @IsNumber()
  maximunNumberRaffles: number;
}

export class CreateRaffleResponseDto {
  id: string;
  idUser: string;
  name: string;
  description: string;
  selectedNumbers: number[];
  maximunNumberRaffles: number;
  createdAt: Date;
  updatedAt: Date;
}
