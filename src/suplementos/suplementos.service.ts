// src/suplementos/suplementos.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Suplemento } from './suplemento.entity';

@Injectable()
export class SuplementosService {
  constructor(
    @InjectRepository(Suplemento)
    private suplementosRepository: Repository<Suplemento>,
  ) {}

  findAll(): Promise<Suplemento[]> {
    return this.suplementosRepository.find();
  }

  findOne(id: number): Promise<Suplemento | null> {
    return this.suplementosRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<Suplemento> {
    const nuevo: Suplemento = this.suplementosRepository.create(
      data as Suplemento,
    );
    return this.suplementosRepository.save(nuevo);
  }

  async update(id: number, data: any): Promise<Suplemento | null> {
    const suplemento = await this.suplementosRepository.findOne({
      where: { id },
    });

    if (!suplemento) {
      return null;
    }

    Object.assign(suplemento, data);
    return this.suplementosRepository.save(suplemento);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.suplementosRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
