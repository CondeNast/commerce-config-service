import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { FeatureFlagIdDto, UpdateFeatureFlagDto } from '../core/dtos';
import { FeatureFlagUseCases } from '../use-cases/featureflag/featureflag.use-case';

@Controller('api/feature-flags')
export class FeatureflagController {
  constructor(private featureflagUseCases: FeatureFlagUseCases) {}

  @Get()
  async getAll() {
    return this.featureflagUseCases.getAllFeatureFlags();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.featureflagUseCases.getFeatureFlagById(id);
  }

  @Post()
  createFeatureflag(@Body() featureflagDto: FeatureFlagIdDto) {
    return this.featureflagUseCases.createFeatureFlag(featureflagDto);
  }

  @Put(':id')
  updateFeatureflag(
    @Param('id') featureflagId: string,
    @Body() updatefeatureflagDto: UpdateFeatureFlagDto,
  ) {
    return this.featureflagUseCases.updateFeatureFlag(
      featureflagId,
      updatefeatureflagDto,
    );
  }
}
