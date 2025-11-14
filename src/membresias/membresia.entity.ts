// src/membresias/membresia.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('membresias')
export class Membresia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string; // Mensual, Trimestral, Anual, etc.

  @Column({ nullable: true })
  descripcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  precio: number | null;

  @Column({ nullable: true })
  duracion_dias: number; // ej: 30, 90, 365
}
