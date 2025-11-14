// src/objetivos_generales/objetivo_general.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('objetivos_generales')
export class ObjetivoGeneral {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  descripcion: string;
}
