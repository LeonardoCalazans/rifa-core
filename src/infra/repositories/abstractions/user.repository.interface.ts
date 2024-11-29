import { UserDto, UserResponseDto } from 'src/presentation/v1/dtos';

export abstract class IUserRepository {
  abstract createUser(data: UserDto, id: string): Promise<UserResponseDto>;
}
