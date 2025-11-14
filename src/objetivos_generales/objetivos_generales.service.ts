// src/objetivos_generales/objetivos_generales.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjetivoGeneral } from './objetivo_general.entity';

@Injectable()
export class ObjetivosGeneralesService {
  constructor(
    @InjectRepository(ObjetivoGeneral)
    private objetivosRepository: Repository<ObjetivoGeneral>,
  ) {}

  findAll(): Promise<ObjetivoGeneral[]> {
    return this.objetivosRepository.find();
  }

  findOne(id: number): Promise<ObjetivoGeneral | null> {
    return this.objetivosRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<ObjetivoGeneral> {
    const nuevo: ObjetivoGeneral = this.objetivosRepository.create(
      data as ObjetivoGeneral,
    );
    return this.objetivosRepository.save(nuevo);
  }

  async update(id: number, data: any): Promise<ObjetivoGeneral | null> {
    const obj = await this.objetivosRepository.findOne({ where: { id } });

    if (!obj) {
      return null;
    }

    Object.assign(obj, data);
    return this.objetivosRepository.save(obj);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.objetivosRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
