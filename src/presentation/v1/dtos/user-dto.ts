import {
  IsEmail,
  IsNumberString,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsNumberString()
  document: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}

export class CreateUserResponseDto {
  id: string;
  username: string;
  document: string;
  email: string;
}

export class FindByEmailResponseDto {
  id: string;
  username: string;
  document: string;
  email: string;
  password: string;
}
