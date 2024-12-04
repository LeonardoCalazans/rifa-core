import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateUserDto,
  CreateUserResponseDto,
  FindByEmailResponseDto,
} from 'src/presentation/v1/dtos';
import { UserEntity } from '../entities';
import { IUserService } from '../abstractions';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(
    id: string,
    newUser: CreateUserDto,
  ): Promise<CreateUserResponseDto> {
    const userAlreadyRegistered = await this.findByEmail(newUser.username);

    if (userAlreadyRegistered) {
      throw new ConflictException(
        `User '${newUser.username}' already registered`,
      );
    }

    const dbUser = new UserEntity();
    dbUser.id = id;
    dbUser.username = newUser.username;
    dbUser.password = newUser.password;
    dbUser.document = newUser.document;
    dbUser.email = newUser.email;

    const createdUser = await this.usersRepository.save(dbUser);
    return {
      id: `${createdUser.id}`,
      username: createdUser.username,
      document: createdUser.document,
      email: createdUser.email,
    };
  }

  async findByEmail(username: string): Promise<FindByEmailResponseDto | null> {
    const userFound = await this.usersRepository.findOne({
      where: { username },
    });

    if (!userFound) {
      return null;
    }

    return {
      id: `${userFound.id}`,
      username: userFound.username,
      document: userFound.document,
      email: userFound.email,
      password: userFound.password,
    };
  }
}
