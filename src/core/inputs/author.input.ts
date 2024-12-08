import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
}
@InputType()
export class GetAuthorInput {
  @Field()
  _id: string;
}

@InputType()
export class UpdateAuthorInput {
  @Field()
  _id: string;
  data: CreateAuthorInput;
}
@InputType()
export class DeleteAuthorInput {
  @Field()
  _id: string;
}
