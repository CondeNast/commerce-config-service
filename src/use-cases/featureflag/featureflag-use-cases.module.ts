import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { FeatureFlagFactoryService } from './featureflag-factory.service';
import { FeatureFlagResolver } from './featureflag-resolver';
import { FeatureFlagUseCases } from './featureflag.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [FeatureFlagFactoryService, FeatureFlagUseCases, FeatureFlagResolver],
  exports: [FeatureFlagFactoryService, FeatureFlagUseCases],
})
export class FeatureFlagUseCasesModule {}
