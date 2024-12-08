import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
@Entity('users')
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
