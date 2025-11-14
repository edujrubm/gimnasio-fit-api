// src/instructores/instructores.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instructor } from './instructor.entity';

@Injectable()
export class InstructoresService {
  constructor(
    @InjectRepository(Instructor)
    private instructoresRepository: Repository<Instructor>,
  ) {}

  findAll(): Promise<Instructor[]> {
    return this.instructoresRepository.find();
  }

  findOne(id: number): Promise<Instructor | null> {
    return this.instructoresRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<Instructor> {
    const nuevo: Instructor = this.instructoresRepository.create(
      data as Instructor,
    );
    return this.instructoresRepository.save(nuevo);
  }

  async update(id: number, data: any): Promise<Instructor | null> {
    const instructor = await this.instructoresRepository.findOne({
      where: { id },
    });

    if (!instructor) {
      return null;
    }

    Object.assign(instructor, data);
    return this.instructoresRepository.save(instructor);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.instructoresRepository.delete(id);

    if (!result.affected) {
      return false;
    }

    return result.affected > 0;
  }
}
