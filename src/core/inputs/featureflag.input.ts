import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Links {
  @Field()
  self: string; // e.g., "/api/feature-flags/5859b4507bb5d280ic51bf4e7"
}

@ObjectType()
export class Brand {
  @Field()
  key: string; // e.g., "acme", "ad", "all"

  @Field(() => Boolean)
  value: boolean; // e.g., true or false
}

@ObjectType()
export class Brands {
  @Field(() => [Brand])
  entries: Brand[]; // Array of key-value pairs
}

@ObjectType()
export class FeatureFlagAttributes {
  @Field()
  name: string; // e.g., "clipsLede"

  @Field(() => Brands)
  brands: Brands;

  @Field()
  createdAt: string; // ISO 8601 Date string, e.g., "2016-12-20T22:44:32.326Z"
}

@ObjectType()
export class FeatureFlag {
  @Field()
  type: string; // e.g., "feature-flags"

  @Field()
  id: string; // e.g., "5859b4507bb5d280c51bf4e7"

  @Field(() => Links)
  links: Links;

  @Field(() => FeatureFlagAttributes)
  attributes: FeatureFlagAttributes;
}

@ObjectType()
export class FeatureFlagResponse {
  @Field(() => [FeatureFlag])
  data: FeatureFlag[];
}

@InputType()
export class CreateFeatureFlagInput {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
}
@InputType()
export class GetFeatureFlagInput {
  @Field()
  _id: string;
}

@InputType()
export class UpdateFeatureFlagInput {
  @Field()
  _id: string;
  data: CreateFeatureFlagInput;
}
@InputType()
export class DeleteFeatureFlagInput {
  @Field()
  _id: string;
}
