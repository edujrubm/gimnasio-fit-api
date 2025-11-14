// src/suplementos/suplementos.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suplemento } from './suplemento.entity';
import { SuplementosService } from './suplementos.service';
import { SuplementosController } from './suplementos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Suplemento])],
  providers: [SuplementosService],
  controllers: [SuplementosController],
})
export class SuplementosModule {}
