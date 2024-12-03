import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateUserDto, CreateUserResponseDto } from '../dtos/user-dto';
import { CreateUserUseCase } from 'src/application/usecases/user';

@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createUser(
    @Body() user: CreateUserDto,
  ): Promise<CreateUserResponseDto> {
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
