/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsUUID } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: string;
}

@InputType()
export class GetLessonsInput {
  @IsUUID()
  @Field()
  id: string;
}
