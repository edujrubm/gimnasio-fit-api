// src/instructores/instructor.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('instructores')
export class Instructor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  especialidad: string; // pesas, cardio, crossfit, etc.

  @Column({ nullable: true })
  telefono: string;

  @Column({ nullable: true })
  email: string;
}
