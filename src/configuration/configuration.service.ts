import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return Number(this.configService.get<number>('boilerplate.PORT'));
  }
  get URL_MONGO_CONNECTION_STRING(): string {
    return this.configService.get<string>(
      'boilerplate.URL_MONGO_CONNECTION_STRING',
    );
  }
}
