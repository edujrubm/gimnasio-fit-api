// src/promociones/promociones.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Promocion } from './promocion.entity';

@Injectable()
export class PromocionesService {
  constructor(
    @InjectRepository(Promocion)
    private promocionesRepository: Repository<Promocion>,
  ) {}

  findAll(): Promise<Promocion[]> {
    return this.promocionesRepository.find();
  }

  findOne(id: number): Promise<Promocion | null> {
    return this.promocionesRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<Promocion> {
    const nueva: Promocion = this.promocionesRepository.create(
      data as Promocion,
    );
    return this.promocionesRepository.save(nueva);
  }

  async update(id: number, data: any): Promise<Promocion | null> {
    const promo = await this.promocionesRepository.findOne({ where: { id } });

    if (!promo) {
      return null;
    }

    Object.assign(promo, data);
    return this.promocionesRepository.save(promo);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.promocionesRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
