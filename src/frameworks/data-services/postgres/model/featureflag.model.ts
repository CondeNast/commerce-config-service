import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { FeatureFlagBrand } from './featurflagbrand.model';

@Entity()
export class FeatureFlagEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column({ name: 'self_link' })
  selfLink: string;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => FeatureFlagBrand, (brand) => brand.featureFlag, {
    cascade: true,
  })
  brands: FeatureFlagBrand[];
}
