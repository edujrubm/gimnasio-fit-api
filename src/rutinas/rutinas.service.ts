// src/rutinas/rutinas.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rutina } from './rutina.entity';

@Injectable()
export class RutinasService {
  constructor(
    @InjectRepository(Rutina)
    private rutinasRepository: Repository<Rutina>,
  ) {}

  findAll(): Promise<Rutina[]> {
    return this.rutinasRepository.find();
  }

  findOne(id: number): Promise<Rutina | null> {
    return this.rutinasRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<Rutina> {
    const nueva: Rutina = this.rutinasRepository.create(data as Rutina);
    return this.rutinasRepository.save(nueva);
  }

  async update(id: number, data: any): Promise<Rutina | null> {
    const rutina = await this.rutinasRepository.findOne({ where: { id } });

    if (!rutina) {
      return null;
    }

    Object.assign(rutina, data);
    return this.rutinasRepository.save(rutina);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.rutinasRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
