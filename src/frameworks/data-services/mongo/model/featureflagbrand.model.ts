import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export type FeatureFlagBrandDocument = FeatureFlagBrandEntity & Document;

@Schema()
export class FeatureFlagBrandEntity {
  @Prop({ type: String, required: true })
  brandName: string;

  @Prop({ type: Boolean, required: true })
  isEnabled: boolean;

  @Prop({ type: Types.ObjectId, ref: 'FeatureFlag', required: true })
  featureFlag: Types.ObjectId;
}

export const FeatureFlagBrandSchema = SchemaFactory.createForClass(
  FeatureFlagBrandEntity,
);
