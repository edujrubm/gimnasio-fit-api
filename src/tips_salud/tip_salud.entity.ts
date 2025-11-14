// src/tips_salud/tip_salud.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tips_salud')
export class TipSalud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  contenido: string;

  @Column({ nullable: true })
  categoria: string; // sueño, nutrición, entrenamiento, etc.

  @Column({ type: 'date', nullable: true })
  fecha_publicacion: string;
}
