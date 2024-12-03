import { IsEmail, IsString } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class SignInResponseDto {
  accessToken: string;
  expiresIn: number;
  user: SignUpDto;
}

class SignUpDto {
  id: string;
  username: string;
  email: string;
  document: string;
}
