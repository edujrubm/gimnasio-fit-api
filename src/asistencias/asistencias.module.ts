// src/asistencias/asistencias.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asistencia } from './asistencia.entity';
import { AsistenciasService } from './asistencias.service';
import { AsistenciasController } from './asistencias.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Asistencia])],
  providers: [AsistenciasService],
  controllers: [AsistenciasController],
})
export class AsistenciasModule {}
