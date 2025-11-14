// src/dietas/dieta.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('dietas')
export class Dieta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  objetivo: string; // bajar de peso, subir masa, mantenimiento

  @Column({ nullable: true })
  calorias_aprox: number;
}
