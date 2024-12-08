import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { AuthorFactoryService } from './author-factory.service';
import { AuthorResolver } from './author-resolver';
import { AuthorUseCases } from './author.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [AuthorFactoryService, AuthorUseCases, AuthorResolver],
  exports: [AuthorFactoryService, AuthorUseCases],
})
export class AuthorUseCasesModule {}
