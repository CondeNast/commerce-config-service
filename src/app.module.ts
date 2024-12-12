import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { AuthorController } from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { FeatureflagUseCasesModule } from './use-cases/featureflag/featureflag-use-cases.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigurationModule,
    FeatureflagUseCasesModule,
    DataServicesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AuthorController],
})
export class AppModule {}
