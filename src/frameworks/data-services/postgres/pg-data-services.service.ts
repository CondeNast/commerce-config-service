import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FeatureFlag,
  IDataServicesPostgres,
  IGenericRepository,
} from 'src/core';
import { Repository } from 'typeorm';
import { FeatureFlagEntity } from './model';
import { PostgresGenericRepository } from './pg-generic-repository';

@Injectable()
export class PostgresDataServices
  implements IDataServicesPostgres, OnApplicationBootstrap
{
  featureFlags: PostgresGenericRepository<FeatureFlag>;
  constructor(
    @InjectRepository(FeatureFlagEntity)
    private featureFlagRepository: Repository<FeatureFlagEntity>,
  ) {}
  featureflags: IGenericRepository<FeatureFlag>;

  onApplicationBootstrap() {
    this.featureFlags = new PostgresGenericRepository<FeatureFlag>(
      this.featureFlagRepository,
    );
  }
}
