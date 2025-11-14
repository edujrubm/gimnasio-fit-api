// src/rutinas/rutinas.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rutina } from './rutina.entity';
import { RutinasService } from './rutinas.service';
import { RutinasController } from './rutinas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Rutina])],
  providers: [RutinasService],
  controllers: [RutinasController],
})
export class RutinasModule {}
