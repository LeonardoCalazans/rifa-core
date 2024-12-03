export class SignInDto {
  email: string;
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
