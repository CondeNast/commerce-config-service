import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { FeatureflagController } from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { FeatureFlagUseCasesModule } from './use-cases/featureflag/featureflag-use-cases.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigurationModule,
    FeatureFlagUseCasesModule,
    DataServicesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [FeatureflagController],
})
export class AppModule {}
