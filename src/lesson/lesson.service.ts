import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Lesson } from './lesson.entity';
import { CreateLessonInput, GetLessonsInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate: '12',
      endDate: '12',
    });
    return lesson.save();
  }

  async getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find({});
  }

  async getLesson(getLessonsInput: GetLessonsInput): Promise<Lesson> {
    const { id } = getLessonsInput;
    return this.lessonRepository.findOne({ id });
  }
}
