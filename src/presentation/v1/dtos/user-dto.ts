export class UserDto {
  username: string;
  document: string;
  email: string;
  password: string;
}

export class UserResponseDto {
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