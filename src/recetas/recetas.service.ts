// src/recetas/recetas.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receta } from './receta.entity';

@Injectable()
export class RecetasService {
  constructor(
    @InjectRepository(Receta)
    private recetasRepository: Repository<Receta>,
  ) {}

  findAll(): Promise<Receta[]> {
    return this.recetasRepository.find();
  }

  findOne(id: number): Promise<Receta | null> {
    return this.recetasRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<Receta> {
    const nueva: Receta = this.recetasRepository.create(data as Receta);
    return this.recetasRepository.save(nueva);
  }

  async update(id: number, data: any): Promise<Receta | null> {
    const receta = await this.recetasRepository.findOne({ where: { id } });

    if (!receta) {
      return null;
    }

    Object.assign(receta, data);
    return this.recetasRepository.save(receta);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.recetasRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
