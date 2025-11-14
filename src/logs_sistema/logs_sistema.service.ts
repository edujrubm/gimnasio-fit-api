// src/logs_sistema/logs_sistema.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogSistema } from './log_sistema.entity';

@Injectable()
export class LogsSistemaService {
  constructor(
    @InjectRepository(LogSistema)
    private logsRepository: Repository<LogSistema>,
  ) {}

  findAll(): Promise<LogSistema[]> {
    return this.logsRepository.find();
  }

  findOne(id: number): Promise<LogSistema | null> {
    return this.logsRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<LogSistema> {
    const nuevo: LogSistema = this.logsRepository.create(data as LogSistema);
    return this.logsRepository.save(nuevo);
  }

  async update(id: number, data: any): Promise<LogSistema | null> {
    const log = await this.logsRepository.findOne({ where: { id } });

    if (!log) {
      return null;
    }

    Object.assign(log, data);
    return this.logsRepository.save(log);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.logsRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
