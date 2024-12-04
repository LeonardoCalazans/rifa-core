import {
  FindByEmailResponseDto,
  CreateUserDto,
  CreateUserResponseDto,
} from 'src/presentation/v1/dtos';

export abstract class IUserRepository {
  abstract createUser(
    data: CreateUserDto,
    id: string,
  ): Promise<CreateUserResponseDto>;
  abstract findByEmail(email: string): Promise<FindByEmailResponseDto>;
}
