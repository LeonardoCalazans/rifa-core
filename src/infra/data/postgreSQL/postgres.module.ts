import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserService } from './service/user.service';
import { IUser } from 'src/infra/abstractions';
import { dataSourceOptions } from './typeOrm.migration-config';

const providers = [
  {
    provide: IUser,
    useClass: UserService,
  },
];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => dataSourceOptions,
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers,
  exports: providers,
})
export class PostgresModule {}
