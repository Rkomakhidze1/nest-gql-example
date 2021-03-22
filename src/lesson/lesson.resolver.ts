/* eslint-disable prettier/prettier */
import { ParseUUIDPipe, UsePipes } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Lesson } from './lesson.entity';
import { CreateLessonInput, GetLessonsInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query(() => [LessonType])
  getLessons() {
    return this.lessonService.getLessons();
  }

  @Query(() => LessonType)
  getLesson(@Args('getLessonInput') getLessonsInput: GetLessonsInput) {
    return this.lessonService.getLesson(getLessonsInput);
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(createLessonInput);
  }
}
