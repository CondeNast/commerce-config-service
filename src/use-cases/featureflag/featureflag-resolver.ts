import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthorDTO } from 'src/core';
import {
  CreateFeatureFlagInput,
  DeleteFeatureFlagInput,
  GetFeatureFlagInput,
  UpdateFeatureFlagInput,
} from '../../core/inputs/featureflag.input';
import { FeatureFlagUseCases } from './featureflag.use-case';

@Resolver()
export class FeatureFlagResolver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private featureFlagUseCases: FeatureFlagUseCases) {}

  @Query(() => [AuthorDTO])
  async featureflags() {
    const users = await this.featureFlagUseCases.getAllFeatureFlags();
    return users;
  }

  @Mutation(() => AuthorDTO)
  async createFeatureFlag(@Args('input') input: CreateFeatureFlagInput) {
    return this.featureFlagUseCases.createFeatureFlag(input);
  }

  @Query(() => AuthorDTO)
  async getFeatureFlag(@Args('input') input: GetFeatureFlagInput) {
    const users = await this.featureFlagUseCases.getFeatureFlagById(input);
    return users;
  }

  @Mutation(() => AuthorDTO)
  async updateFeatureFlag(
    @Args('id') input: UpdateFeatureFlagInput,
    @Args('data') data: CreateFeatureFlagInput,
  ) {
    return this.featureFlagUseCases.updateFeatureFlag(input, data);
  }

  @Mutation(() => String)
  async deleteFeatureFlag(@Args('id') input: DeleteFeatureFlagInput) {
    await this.featureFlagUseCases.deleteFeatureFlag(input);
    return 'FeatureFlag remove';
  }
}
