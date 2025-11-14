// src/clases/clase.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clases_grupales')
export class Clase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string; // Zumba, Spinning, etc.

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  duracion_minutos: number;

  @Column({ nullable: true })
  nivel: string; // principiante, intermedio, avanzado

  @Column({ nullable: true })
  cupo_maximo: number;
}
