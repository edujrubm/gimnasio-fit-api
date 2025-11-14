// src/ejercicios/ejercicio.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ejercicios')
export class Ejercicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  grupo_muscular: string; // ej: pecho, espalda, piernas

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  nivel: string; // principiante, intermedio, avanzado

  @Column({ nullable: true })
  equipo_necesario: string; // mancuerna, barra, peso corporal
}
