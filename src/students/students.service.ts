import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,
  ) {}

  async getStudents(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  async getStudent(id: string): Promise<Student> {
    return this.studentsRepository.findOne({ id });
  }

  async createStudent(studentInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = studentInput;
    const student = this.studentsRepository.create({
      firstName,
      lastName,
      id: uuid(),
    });
    return this.studentsRepository.save(student);
  }
}
