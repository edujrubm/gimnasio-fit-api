// src/ejercicios/ejercicios.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ejercicio } from './ejercicio.entity';
import { EjerciciosService } from './ejercicios.service';
import { EjerciciosController } from './ejercicios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ejercicio])],
  providers: [EjerciciosService],
  controllers: [EjerciciosController],
})
export class EjerciciosModule {}
