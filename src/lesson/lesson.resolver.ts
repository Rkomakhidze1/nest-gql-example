/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query(() => LessonType)
  lesson() {
    return {
      id: 1,
      name: 'Math',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation(() => LessonType)
  createLesson(@Args('name') name: string): Promise<Lesson> {
    return this.lessonService.createLesson(name, '12', '12');
  }
}
