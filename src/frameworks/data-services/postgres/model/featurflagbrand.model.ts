import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { FeatureFlagEntity } from './featureflag.model';

@Entity()
export class FeatureFlagBrand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'brand_name' })
  brandName: string;

  @Column({ name: 'is_enabled' })
  isEnabled: boolean;

  @ManyToOne(() => FeatureFlagEntity, (featureFlag) => featureFlag.brands, {
    onDelete: 'CASCADE',
  })
  featureFlag: FeatureFlagEntity;
}
