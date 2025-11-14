// src/recetas/receta.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('recetas')
export class Receta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  calorias: number;

  @Column({ nullable: true })
  proteina_gramos: number;

  @Column({ nullable: true })
  carbohidratos_gramos: number;

  @Column({ nullable: true })
  grasas_gramos: number;
}
