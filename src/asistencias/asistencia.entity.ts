// src/asistencias/asistencia.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('asistencias')
export class Asistencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', nullable: true })
  fecha: string;

  @Column({ type: 'time', nullable: true })
  hora: string;

  @Column({ nullable: true })
  nota: string;
}
