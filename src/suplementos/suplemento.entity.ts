// src/suplementos/suplemento.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('suplementos')
export class Suplemento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  tipo: string; // proteína, creatina, multivitamínico, etc.

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  marca: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  precio_aprox: number | null;
}
