/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './student.input';
import { Student } from './student.type';
import { StudentsService } from './students.service';

@Resolver(() => Student)
export class StudnetResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Query(() => [Student])
  getStudents() {
    return this.studentsService.getStudents();
  }

  @Query(() => Student)
  getStudent(@Args('id') id: string) {
    return this.studentsService.getStudent(id);
  }

  @Mutation(() => Student)
  createStudent(@Args('studentInput') studentInput: CreateStudentInput) {
    return this.studentsService.createStudent(studentInput);
  }
}
