import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author, IDataServicesPostgres } from 'src/core';
import { Repository } from 'typeorm';
import { UsersEntity } from './model';
import { PostgresGenericRepository } from './pg-generic-repository';

@Injectable()
export class PostgresDataServices
  implements IDataServicesPostgres, OnApplicationBootstrap
{
  authors: PostgresGenericRepository<Author>;
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  onApplicationBootstrap() {
    this.authors = new PostgresGenericRepository<Author>(this.usersRepository);
  }
}
