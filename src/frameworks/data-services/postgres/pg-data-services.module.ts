import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { IDataServicesPostgres } from 'src/core';
import { UsersEntity } from './model';
import { PostgresDataServices } from './pg-data-services.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([UsersEntity]),
  ],
  providers: [
    {
      provide: IDataServicesPostgres,
      useClass: PostgresDataServices,
    },
  ],
  exports: [IDataServicesPostgres],
})
export class PostgresDataServicesModule {}
