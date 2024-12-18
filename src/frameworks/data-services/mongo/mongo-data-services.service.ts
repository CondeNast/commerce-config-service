import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeatureFlag, IDataServices, IGenericRepository } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { FeatureFlagEntity, FeatureFlagDocument } from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  featureflag: MongoGenericRepository<FeatureFlagEntity>;

  constructor(
    @InjectModel(FeatureFlagEntity.name)
    private featureFlagRepository: Model<FeatureFlagDocument>,
  ) {}
  featureflags: IGenericRepository<FeatureFlag>;

  onApplicationBootstrap() {
    this.featureflag = new MongoGenericRepository<FeatureFlagEntity>(
      this.featureFlagRepository,
    );
    // this.books = new MongoGenericRepository<Book>(this.BookRepository, [
    //   'author',
    //   'genre',
    // ]);
    // this.genres = new MongoGenericRepository<Genre>(this.GenreRepository);
  }
}
