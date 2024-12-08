import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthorDTO {
  @Field()
  _id?: string;

  @Field()
  firstName?: string;

  @Field()
  lastName?: string;
}
