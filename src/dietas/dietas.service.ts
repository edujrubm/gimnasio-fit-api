// src/dietas/dietas.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dieta } from './dieta.entity';

@Injectable()
export class DietasService {
  constructor(
    @InjectRepository(Dieta)
    private dietasRepository: Repository<Dieta>,
  ) {}

  findAll(): Promise<Dieta[]> {
    return this.dietasRepository.find();
  }

  findOne(id: number): Promise<Dieta | null> {
    return this.dietasRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<Dieta> {
    const nueva: Dieta = this.dietasRepository.create(data as Dieta);
    return this.dietasRepository.save(nueva);
  }

  async update(id: number, data: any): Promise<Dieta | null> {
    const dieta = await this.dietasRepository.findOne({ where: { id } });

    if (!dieta) {
      return null;
    }

    Object.assign(dieta, data);
    return this.dietasRepository.save(dieta);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.dietasRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
