import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { AuthorController } from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { AuthorUseCasesModule } from './use-cases/author/author-use-cases.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigurationModule,
    AuthorUseCasesModule,
    DataServicesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AuthorController],
})
export class AppModule {}
