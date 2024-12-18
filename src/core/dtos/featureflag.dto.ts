import { PartialType, PickType } from '@nestjs/mapped-types';
import { FeatureFlag } from '../../core/entities';

// Partial DTO for updating feature flags
export class UpdateFeatureFlagDto extends PartialType(FeatureFlag) {}

// DTO for selecting specific fields of `FeatureFlag`
export class FeatureFlagIdDto extends PickType(FeatureFlag, ['id'] as const) {}
