import { Injectable } from '@nestjs/common';
import { FeatureFlag } from '../../core/entities';
import { IDataServices, IDataServicesPostgres } from '../../core/abstracts';
import { CreateAuthorDto, UpdateAuthorDto } from '../../core/dtos';
import { FeatureFlagFactoryService } from './featureflag-factory.service';

@Injectable()
export class AuthorUseCases {
  //if you use postgres change name dataService *IDataServicesPostgres*
  constructor(
    private dataServices: IDataServicesPostgres,
    private featureFlagFactoryService: FeatureFlagFactoryService,
  ) {}

  getAllAuthors(): Promise<FeatureFlag[]> {
    return this.dataServices.authors.getAll();
  }

  getAuthorById(id: any): Promise<FeatureFlag> {
    return this.dataServices.authors.get(id);
  }

  createAuthor(createAuthorDto: CreateAuthorDto): Promise<FeatureFlag> {
    const author =
      this.featureFlagFactoryService.createNewFeatureflag(createAuthorDto);
    return this.dataServices.authors.create(author);
  }

  updateAuthor(
    authorId: string | any,
    updateAuthorDto: UpdateAuthorDto,
  ): Promise<FeatureFlag> {
    const featureflag =
      this.featureFlagFactoryService.updateFeatureflag(updateAuthorDto);
    return this.dataServices.authors.update(authorId, featureflag);
  }

  deleteFeatureFlag(id: any): Promise<FeatureFlag[]> {
    return this.dataServices.authors.delete(id);
  }
}
