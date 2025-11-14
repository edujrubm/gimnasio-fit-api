// src/recetas/recetas.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RecetasService } from './recetas.service';
import { Receta } from './receta.entity';

@Controller('recetas')
export class RecetasController {
  constructor(private readonly recetasService: RecetasService) {}

  @Get()
  getAll(): Promise<Receta[]> {
    return this.recetasService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Receta | null> {
    return this.recetasService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<Receta> {
    return this.recetasService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<Receta | null> {
    return this.recetasService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.recetasService.delete(Number(id));
  }
}
