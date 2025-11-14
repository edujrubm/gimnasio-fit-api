// src/pagos/pago.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  monto: number;

  @Column({ nullable: true })
  metodo_pago: string; // efectivo, tarjeta, transferencia

  @Column({ type: 'datetime', nullable: true })
  fecha_pago: Date;

  @Column({ nullable: true })
  descripcion: string;
}
