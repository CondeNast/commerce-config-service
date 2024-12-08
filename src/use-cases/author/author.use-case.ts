import { Injectable } from '@nestjs/common';
import { Author } from '../../core/entities';
import { IDataServices, IDataServicesPostgres } from '../../core/abstracts';
import { CreateAuthorDto, UpdateAuthorDto } from '../../core/dtos';
import { AuthorFactoryService } from './author-factory.service';

@Injectable()
export class AuthorUseCases {
  //if you use postgres change name dataService *IDataServicesPostgres*
  constructor(
    private dataServices: IDataServicesPostgres,
    private authorFactoryService: AuthorFactoryService,
  ) {}

  getAllAuthors(): Promise<Author[]> {
    return this.dataServices.authors.getAll();
  }

  getAuthorById(id: any): Promise<Author> {
    return this.dataServices.authors.get(id);
  }

  createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorFactoryService.createNewAuthor(createAuthorDto);
    return this.dataServices.authors.create(author);
  }

  updateAuthor(
    authorId: string | any,
    updateAuthorDto: UpdateAuthorDto,
  ): Promise<Author> {
    const author = this.authorFactoryService.updateAuthor(updateAuthorDto);
    return this.dataServices.authors.update(authorId, author);
  }

  deleteAuthor(id: any): Promise<Author[]> {
    return this.dataServices.authors.delete(id);
  }
}
