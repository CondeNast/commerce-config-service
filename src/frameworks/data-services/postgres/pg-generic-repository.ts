import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IGenericRepository } from 'src/core';
import { Repository } from 'typeorm';
import { UsersEntity } from './model';

export class PostgresGenericRepository<T> implements IGenericRepository<T> {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}
  async getAll() {
    return await this.usersRepository.find();
  }
  async get(id: any) {
    return await this.usersRepository.findOne({
      where: id,
    });
  }
  async create(item: T) {
    const user = this.usersRepository.create(item);
    await this.usersRepository.save(item);
    return user;
  }
  async update(id: any, item: T) {
    const postExist = await this.usersRepository.findOne({
      where: id,
    });
    if (!postExist) throw new NotFoundException('Este post no existe');
    const updatedPost = Object.assign(postExist, item);

    return await this.usersRepository.save(updatedPost);
  }
  delete(id: string) {
    return this.usersRepository.delete(id);
  }
}
