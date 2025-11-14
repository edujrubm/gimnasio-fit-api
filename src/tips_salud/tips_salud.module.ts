// src/tips_salud/tips_salud.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipSalud } from './tip_salud.entity';
import { TipsSaludService } from './tips_salud.service';
import { TipsSaludController } from './tips_salud.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipSalud])],
  providers: [TipsSaludService],
  controllers: [TipsSaludController],
})
export class TipsSaludModule {}
