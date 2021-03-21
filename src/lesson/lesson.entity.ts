/* eslint-disable prettier/prettier */
import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Lesson extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
