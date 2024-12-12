import { Injectable } from '@nestjs/common';
import { FeatureFlag } from '../../core/entities';
import { FeatureFlagResponse } from '../../core/entities';
import { CreateAuthorDto, UpdateAuthorDto } from '../../core/dtos';

@Injectable()
export class FeatureFlagFactoryService {
  createNewFeatureflag(createFeatureflagDto: CreateFeatureflagDto) {
    const newFeatureflag = new FeatureFlag();
    newAuthor.firstName = createAuthorDto.firstName;
    newAuthor.lastName = createAuthorDto.lastName;

    return newAuthor;
  }

  updateFeatureflag(updateFeatureflagDto: UpdateFeatureflagDto) {
    const newAuthor = new Author();
    newAuthor.firstName = updateAuthorDto.firstName;
    newAuthor.lastName = updateAuthorDto.lastName;

    return newAuthor;
  }
}
