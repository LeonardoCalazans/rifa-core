import { Injectable } from '@nestjs/common';
import { v7 as uuidV7 } from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';
import {
  CreateUserDto,
  CreateUserResponseDto,
} from 'src/presentation/v1/dtos/user-dto';
import { IUserRepository } from 'src/infra/repositories/abstractions/user.repository.interface';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(user: CreateUserDto): Promise<CreateUserResponseDto> {
    try {
      const id = uuidV7();
      const password = bcryptHashSync(user.password, 10);
      const createdUser = await this.userRepository.createUser(
        {
          ...user,
          password,
        },
        id,
      );

      return {
        id: createdUser.id,
        username: createdUser.username,
        document: createdUser.document,
        email: createdUser.email,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
