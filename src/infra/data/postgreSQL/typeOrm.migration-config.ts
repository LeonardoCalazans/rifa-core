import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { RaffleEntity, UserEntity } from './entities';
import { UserTable1733267785889 } from './migrations/1733267785889-user-table';
import { RaffleTable1733267775436 } from './migrations/1733268655700-raffle-table';

config();

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: +configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [RaffleEntity, UserEntity],
  migrations: [RaffleTable1733267775436, UserTable1733267785889],
  synchronize: false,
};

export default new DataSource(dataSourceOptions);
