// src/tips_salud/tips_salud.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TipsSaludService } from './tips_salud.service';
import { TipSalud } from './tip_salud.entity';

@Controller('tips_salud')
export class TipsSaludController {
  constructor(private readonly tipsSaludService: TipsSaludService) {}

  @Get()
  getAll(): Promise<TipSalud[]> {
    return this.tipsSaludService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<TipSalud | null> {
    return this.tipsSaludService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<TipSalud> {
    return this.tipsSaludService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<TipSalud | null> {
    return this.tipsSaludService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.tipsSaludService.delete(Number(id));
  }
}
