// src/objetivos_generales/objetivos_generales.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjetivoGeneral } from './objetivo_general.entity';
import { ObjetivosGeneralesService } from './objetivos_generales.service';
import { ObjetivosGeneralesController } from './objetivos_generales.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ObjetivoGeneral])],
  providers: [ObjetivosGeneralesService],
  controllers: [ObjetivosGeneralesController],
})
export class ObjetivosGeneralesModule {}
