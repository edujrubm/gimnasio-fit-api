// src/ejercicios/ejercicios.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ejercicio } from './ejercicio.entity';

@Injectable()
export class EjerciciosService {
  constructor(
    @InjectRepository(Ejercicio)
    private ejerciciosRepository: Repository<Ejercicio>,
  ) {}

  findAll(): Promise<Ejercicio[]> {
    return this.ejerciciosRepository.find();
  }

  findOne(id: number): Promise<Ejercicio | null> {
    return this.ejerciciosRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<Ejercicio> {
    const nuevo: Ejercicio = this.ejerciciosRepository.create(data as Ejercicio);
    return this.ejerciciosRepository.save(nuevo);
  }

  async update(id: number, data: any): Promise<Ejercicio | null> {
    const ejercicio = await this.ejerciciosRepository.findOne({ where: { id } });

    if (!ejercicio) {
      return null;
    }

    Object.assign(ejercicio, data);
    return this.ejerciciosRepository.save(ejercicio);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.ejerciciosRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
