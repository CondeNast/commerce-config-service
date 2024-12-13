import { Injectable } from '@nestjs/common';
import { FeatureFlag } from '../../core/entities';
import { IDataServices, IDataServicesPostgres } from '../../core/abstracts';
import { FeatureFlagIdDto, UpdateFeatureFlagDto } from '../../core/dtos';
import { FeatureFlagFactoryService } from './featureflag-factory.service';

@Injectable()
export class FeatureFlagUseCases {
  //if you use postgres change name dataService *IDataServicesPostgres*
  constructor(
    private dataServices: IDataServicesPostgres,
    private featureFlagFactoryService: FeatureFlagFactoryService,
  ) {}

  getAllFeatureFlags(): Promise<FeatureFlag[]> {
    return this.dataServices.authors.getAll();
  }

  getFeatureFlagById(id: any): Promise<FeatureFlag> {
    return this.dataServices.authors.get(id);
  }

  createFeatureFlag(createAuthorDto: FeatureFlagIdDto): Promise<FeatureFlag> {
    const author =
      this.featureFlagFactoryService.createNewFeatureflag(createAuthorDto);
    return this.dataServices.authors.create(author);
  }

  updateFeatureFlag(
    featureFlagId: string | any,
    updatefeatureFlagDto: UpdateFeatureFlagDto,
  ): Promise<FeatureFlag> {
    const featureflag =
      this.featureFlagFactoryService.updateFeatureflag(updatefeatureFlagDto);
    return this.dataServices.authors.update(featureFlagId, featureflag);
  }

  deleteFeatureFlag(id: any): Promise<FeatureFlag[]> {
    return this.dataServices.authors.delete(id);
  }
}
