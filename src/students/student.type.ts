/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
