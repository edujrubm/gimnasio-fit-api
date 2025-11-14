// src/pagos/pagos.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pago } from './pago.entity';

@Injectable()
export class PagosService {
  constructor(
    @InjectRepository(Pago)
    private pagosRepository: Repository<Pago>,
  ) {}

  findAll(): Promise<Pago[]> {
    return this.pagosRepository.find();
  }

  findOne(id: number): Promise<Pago | null> {
    return this.pagosRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<Pago> {
    const nuevo: Pago = this.pagosRepository.create(data as Pago);
    return this.pagosRepository.save(nuevo);
  }

  async update(id: number, data: any): Promise<Pago | null> {
    const pago = await this.pagosRepository.findOne({ where: { id } });

    if (!pago) {
      return null;
    }

    Object.assign(pago, data);
    return this.pagosRepository.save(pago);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.pagosRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
