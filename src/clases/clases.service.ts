// src/clases/clases.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clase } from './clase.entity';

@Injectable()
export class ClasesService {
  constructor(
    @InjectRepository(Clase)
    private clasesRepository: Repository<Clase>,
  ) {}

  findAll(): Promise<Clase[]> {
    return this.clasesRepository.find();
  }

  findOne(id: number): Promise<Clase | null> {
    return this.clasesRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<Clase> {
    const nueva: Clase = this.clasesRepository.create(data as Clase);
    return this.clasesRepository.save(nueva);
  }

  async update(id: number, data: any): Promise<Clase | null> {
    const clase = await this.clasesRepository.findOne({ where: { id } });

    if (!clase) {
      return null;
    }

    Object.assign(clase, data);
    return this.clasesRepository.save(clase);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.clasesRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
