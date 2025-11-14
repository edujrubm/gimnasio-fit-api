// src/tips_salud/tips_salud.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipSalud } from './tip_salud.entity';

@Injectable()
export class TipsSaludService {
  constructor(
    @InjectRepository(TipSalud)
    private tipsRepository: Repository<TipSalud>,
  ) {}

  findAll(): Promise<TipSalud[]> {
    return this.tipsRepository.find();
  }

  findOne(id: number): Promise<TipSalud | null> {
    return this.tipsRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<TipSalud> {
    const nuevo: TipSalud = this.tipsRepository.create(data as TipSalud);
    return this.tipsRepository.save(nuevo);
  }

  async update(id: number, data: any): Promise<TipSalud | null> {
    const tip = await this.tipsRepository.findOne({ where: { id } });

    if (!tip) {
      return null;
    }

    Object.assign(tip, data);
    return this.tipsRepository.save(tip);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.tipsRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
