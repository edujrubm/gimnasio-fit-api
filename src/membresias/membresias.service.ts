// src/membresias/membresias.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Membresia } from './membresia.entity';

@Injectable()
export class MembresiasService {
  constructor(
    @InjectRepository(Membresia)
    private membresiasRepository: Repository<Membresia>,
  ) {}

  findAll(): Promise<Membresia[]> {
    return this.membresiasRepository.find();
  }

  findOne(id: number): Promise<Membresia | null> {
    return this.membresiasRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<Membresia> {
    const nueva: Membresia = this.membresiasRepository.create(data as Membresia);
    return this.membresiasRepository.save(nueva);
  }

  async update(id: number, data: any): Promise<Membresia | null> {
    const membresia = await this.membresiasRepository.findOne({ where: { id } });

    if (!membresia) {
      return null;
    }

    Object.assign(membresia, data);
    return this.membresiasRepository.save(membresia);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.membresiasRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
