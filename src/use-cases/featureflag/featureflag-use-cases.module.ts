import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { AuthorFactoryService } from './featureflag-factory.service';
import { AuthorResolver } from './featureflag-resolver';
import { AuthorUseCases } from './featureflag.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [AuthorFactoryService, AuthorUseCases, AuthorResolver],
  exports: [AuthorFactoryService, AuthorUseCases],
})
export class AuthorUseCasesModule {}
