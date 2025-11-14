// src/rutinas/rutina.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rutinas')
export class Rutina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  nivel: string; // principiante, intermedio, avanzado

  @Column({ nullable: true })
  objetivo: string; // hipertrofia, fuerza, perdida de grasa

  @Column({ nullable: true })
  duracion_semanas: number;
}
