import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoModule } from './mongo/mongoose.module';
import { PostgresModule } from './postgreSQL/postgres.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    // {
    //   DB ? PostgresModule : MongoModule,
    // },
    PostgresModule,
    MongoModule,
  ],
  exports: [PostgresModule, MongoModule],
})
export class InfraModule {}
