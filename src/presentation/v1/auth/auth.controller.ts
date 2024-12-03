import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { SignInDto, SignInResponseDto } from '../dtos';
import { SignInUsecase } from 'src/application/usecases/auth/signIn.usecase';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly signInUseCase: SignInUsecase) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() login: SignInDto): Promise<SignInResponseDto> {
    try {
      return await this.signInUseCase.execute(login);
    } catch (error) {
      return error;
    }
  }
}
