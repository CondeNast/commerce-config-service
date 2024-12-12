import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateAuthorDto, UpdateAuthorDto } from '../core/dtos';
import { AuthorUseCases } from '../use-cases/featureflag/featureflag.use-case';

@Controller('api/feature-flags')
export class FeatureflagController {
  constructor(private featureflagUseCases: AuthorUseCases) {}

  @Get()
  async getAll() {
    return this.featureflagUseCases.getAllAuthors();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.featureflagUseCases.getAuthorById(id);
  }

  @Post()
  createFeatureflag(@Body() featureflagDto: CreateAuthorDto) {
    return this.featureflagUseCases.createAuthor(featureflagDto);
  }

  @Put(':id')
  updateFeatureflag(
    @Param('id') featureflagId: string,
    @Body() updatefeatureflagDto: UpdateAuthorDto,
  ) {
    return this.featureflagUseCases.updateAuthor(
      featureflagId,
      updatefeatureflagDto,
    );
  }
}
