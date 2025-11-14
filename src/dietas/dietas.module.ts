// src/dietas/dietas.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dieta } from './dieta.entity';
import { DietasService } from './dietas.service';
import { DietasController } from './dietas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dieta])],
  providers: [DietasService],
  controllers: [DietasController],
})
export class DietasModule {}
