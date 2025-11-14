// src/asistencias/asistencias.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asistencia } from './asistencia.entity';

@Injectable()
export class AsistenciasService {
  constructor(
    @InjectRepository(Asistencia)
    private asistenciasRepository: Repository<Asistencia>,
  ) {}

  findAll(): Promise<Asistencia[]> {
    return this.asistenciasRepository.find();
  }

  findOne(id: number): Promise<Asistencia | null> {
    return this.asistenciasRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<Asistencia> {
    const nueva: Asistencia = this.asistenciasRepository.create(
      data as Asistencia,
    );
    return this.asistenciasRepository.save(nueva);
  }

  async update(id: number, data: any): Promise<Asistencia | null> {
    const asistencia = await this.asistenciasRepository.findOne({
      where: { id },
    });

    if (!asistencia) {
      return null;
    }

    Object.assign(asistencia, data);
    return this.asistenciasRepository.save(asistencia);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.asistenciasRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
