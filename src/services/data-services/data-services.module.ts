import { Module } from '@nestjs/common';
import { PostgresDataServicesModule } from 'src/frameworks/data-services/postgres/pg-data-services.module';
import { MongoDataServicesModule } from '../../frameworks/data-services/mongo/mongo-data-services.module';

@Module({
  imports: [MongoDataServicesModule, PostgresDataServicesModule],
  exports: [MongoDataServicesModule, PostgresDataServicesModule],
})
export class DataServicesModule {}
