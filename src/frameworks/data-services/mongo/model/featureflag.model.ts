import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { FeatureFlagBrandEntity } from './featureflagbrand.model';
export type FeatureFlagDocument = FeatureFlagEntity & Document;

@Schema({ timestamps: { createdAt: 'created_at' } })
export class FeatureFlagEntity {
  @Prop({ type: String, required: true })
  type: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  selfLink: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'FeatureFlagBrandEntity' }],
    default: [],
  })
  brands: FeatureFlagBrandEntity[];
}

export const FeatureFlagSchema =
  SchemaFactory.createForClass(FeatureFlagEntity);
