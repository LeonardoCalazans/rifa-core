import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto, SignInResponseDto } from 'src/presentation/v1/dtos';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { IUserRepository } from 'src/infra/data/mongo/abstractions/user.repository.interface';

@Injectable()
export class SignInUsecase {
  private jwtExpirationTimeInSeconds: number;

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userRepository: IUserRepository,
  ) {
    this.jwtExpirationTimeInSeconds = +this.configService.get<number>(
      'JWT_EXPIRATION_TIME',
    );
  }
  async execute({ email, password }: SignInDto): Promise<SignInResponseDto> {
    try {
      const foundUser = await this.userRepository.findByEmail(email);

      if (!foundUser || !bcryptCompareSync(password, foundUser.password)) {
        throw new UnauthorizedException();
      }

      const payload = { sub: foundUser.id, username: foundUser.username };
      const token = await this.jwtService.signAsync(payload);

      return {
        accessToken: token,
        expiresIn: this.jwtExpirationTimeInSeconds,
        user: {
          id: foundUser.id,
          username: foundUser.username,
          email: foundUser.email,
          document: foundUser.document,
        },
      };
    } catch (error) {
      console.log(error, 'Catch error');
      return error;
    }
  }
}
