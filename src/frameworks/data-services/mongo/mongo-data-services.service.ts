import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { Author, AuthorDocument } from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  authors: MongoGenericRepository<Author>;

  constructor(
    @InjectModel(Author.name)
    private AuthorRepository: Model<AuthorDocument>,
  ) {}

  onApplicationBootstrap() {
    this.authors = new MongoGenericRepository<Author>(this.AuthorRepository);
    // this.books = new MongoGenericRepository<Book>(this.BookRepository, [
    //   'author',
    //   'genre',
    // ]);
    // this.genres = new MongoGenericRepository<Genre>(this.GenreRepository);
  }
}
