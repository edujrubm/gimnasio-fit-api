// src/dietas/dietas.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DietasService } from './dietas.service';
import { Dieta } from './dieta.entity';

@Controller('dietas')
export class DietasController {
  constructor(private readonly dietasService: DietasService) {}

  @Get()
  getAll(): Promise<Dieta[]> {
    return this.dietasService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Dieta | null> {
    return this.dietasService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<Dieta> {
    return this.dietasService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<Dieta | null> {
    return this.dietasService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.dietasService.delete(Number(id));
  }
}
