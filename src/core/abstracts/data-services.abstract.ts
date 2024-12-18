import { FeatureFlag } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract featureflags: IGenericRepository<FeatureFlag>;
}

export abstract class IDataServicesPostgres {
  abstract featureflags: IGenericRepository<FeatureFlag>;
}
