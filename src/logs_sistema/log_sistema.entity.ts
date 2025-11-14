// src/logs_sistema/log_sistema.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('logs_sistema')
export class LogSistema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  tipo: string; // info, warning, error

  @Column({ nullable: true })
  mensaje: string;

    @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

}
