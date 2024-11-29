import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { UserDto, UserResponseDto } from '../dtos/user-dto';
import { CreateUserUseCase } from 'src/application/usecases/user';

@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createUser(@Body() user: UserDto): Promise<UserResponseDto> {
    const createad = await this.createUserUseCase.execute(user);
    return createad;
  }

  @Get()
  async getUsers(): Promise<any> {
    return 'Users';
  }

  @Put()
  async updateUser(): Promise<any> {
    return 'User updated';
  }
}
