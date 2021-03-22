import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { LessonModule } from './lesson/lesson.module';
import { Student } from './students/student.entity';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school-api',
      useUnifiedTopology: true,
      synchronize: true,
      entities: [Lesson, Student],
    }),
    LessonModule,
    StudentsModule,
  ],
})
export class AppModule {}
