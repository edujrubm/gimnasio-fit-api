// src/membresias/membresias.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Membresia } from './membresia.entity';
import { MembresiasService } from './membresias.service';
import { MembresiasController } from './membresias.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Membresia])],
  providers: [MembresiasService],
  controllers: [MembresiasController],
})
export class MembresiasModule {}
