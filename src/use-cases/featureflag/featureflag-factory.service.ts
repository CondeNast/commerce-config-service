import { Injectable } from '@nestjs/common';
import { FeatureFlag } from '../../core/entities';
import { FeatureFlagIdDto, UpdateFeatureFlagDto } from '../../core/dtos';

@Injectable()
export class FeatureFlagFactoryService {
  createNewFeatureflag(createFeatureflagDto: FeatureFlagIdDto) {
    const newFeatureflag = new FeatureFlag();
    newFeatureflag.links = createFeatureflagDto.id;
    newFeatureflag.type = createFeatureflagDto.lastName;

    return newFeatureflag;
  }

  updateFeatureflag(updateFeatureflagDto: UpdateFeatureFlagDto) {
    const newFeatureFlag = new FeatureFlag();
    newFeatureFlag.firstName = updateFeatureflagDto.firstName;
    newFeatureFlag.lastName = updateFeatureflagDto.lastName;

    return newFeatureFlag;
  }
}
