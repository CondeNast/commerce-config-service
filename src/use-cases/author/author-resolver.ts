import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthorDTO } from 'src/core';
import {
  CreateAuthorInput,
  DeleteAuthorInput,
  GetAuthorInput,
  UpdateAuthorInput,
} from '../../core/inputs/author.input';
import { AuthorUseCases } from './author.use-case';

@Resolver()
export class AuthorResolver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private authorUseCases: AuthorUseCases) {}

  @Query(() => [AuthorDTO])
  async users() {
    const users = await this.authorUseCases.getAllAuthors();
    return users;
  }

  @Mutation(() => AuthorDTO)
  async createAuthor(@Args('input') input: CreateAuthorInput) {
    return this.authorUseCases.createAuthor(input);
  }

  @Query(() => AuthorDTO)
  async getUser(@Args('input') input: GetAuthorInput) {
    const users = await this.authorUseCases.getAuthorById(input);
    return users;
  }

  @Mutation(() => AuthorDTO)
  async updateAuthor(
    @Args('id') input: UpdateAuthorInput,
    @Args('data') data: CreateAuthorInput,
  ) {
    return this.authorUseCases.updateAuthor(input, data);
  }

  @Mutation(() => String)
  async deleteAuthor(@Args('id') input: DeleteAuthorInput) {
    await this.authorUseCases.deleteAuthor(input);
    return 'Author remove';
  }
}
