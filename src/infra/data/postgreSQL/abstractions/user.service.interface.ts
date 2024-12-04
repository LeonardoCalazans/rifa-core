import {
  FindByEmailResponseDto,
  CreateUserDto,
  CreateUserResponseDto,
} from 'src/presentation/v1/dtos';

export abstract class IUserService {
  abstract createUser(
    id: string,
    data: CreateUserDto,
  ): Promise<CreateUserResponseDto>;
  abstract findByEmail(email: string): Promise<FindByEmailResponseDto>;
}
