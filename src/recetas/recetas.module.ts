// src/recetas/recetas.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receta } from './receta.entity';
import { RecetasService } from './recetas.service';
import { RecetasController } from './recetas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Receta])],
  providers: [RecetasService],
  controllers: [RecetasController],
})
export class RecetasModule {}
