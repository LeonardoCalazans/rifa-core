import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  FindByEmailResponseDto,
  UserDto,
  UserResponseDto,
} from 'src/presentation/v1/dtos';
import { User, UserDocument } from '../data/mongo/entities';
import { IUserRepository } from './abstractions/user.repository.interface';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(data: UserDto, id: string): Promise<UserResponseDto> {
    const createdUser = new this.userModel({
      ...data,
      id,
    });
    const savedRaffle = await createdUser.save();
    return savedRaffle;
  }

  async findByEmail(email: string): Promise<FindByEmailResponseDto> {
    const user = this.userModel.findOne({
      email,
    });
    return user;
  }
}
