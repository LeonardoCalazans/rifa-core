import {
  IsArray,
  IsOptional,
  IsString,
  IsNumber,
  ArrayNotEmpty,
} from 'class-validator';

export class UpdateRafleDto {
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  maximunNumberRaffles?: number;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  selectedNumbers?: number[];
}
