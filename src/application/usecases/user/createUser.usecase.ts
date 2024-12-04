import { Injectable } from '@nestjs/common';
import { v7 as uuidV7 } from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';
import {
  CreateUserDto,
  CreateUserResponseDto,
} from 'src/presentation/v1/dtos/user-dto';
import { IUserService } from 'src/infra/data/postgreSQL/abstractions';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userService: IUserService) {}
  async execute(user: CreateUserDto): Promise<CreateUserResponseDto> {
    try {
      const id = uuidV7();
      const password = bcryptHashSync(user.password, 10);
      //   {
      //     ...user,
      //     password,
      //   },
      //   id,
      // );
      const createdUser = await this.userService.createUser(id, {
        password,
        ...user,
      });
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
