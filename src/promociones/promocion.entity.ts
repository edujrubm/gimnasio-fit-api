// src/promociones/promocion.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('promociones')
export class Promocion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ type: 'date', nullable: true })
  fecha_inicio: string;

  @Column({ type: 'date', nullable: true })
  fecha_fin: string;

  @Column({ default: true })
  activo: boolean;
}
