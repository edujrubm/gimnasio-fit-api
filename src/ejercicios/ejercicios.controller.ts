// src/ejercicios/ejercicios.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EjerciciosService } from './ejercicios.service';
import { Ejercicio } from './ejercicio.entity';

@Controller('ejercicios')
export class EjerciciosController {
  constructor(private readonly ejerciciosService: EjerciciosService) {}

  @Get()
  getAll(): Promise<Ejercicio[]> {
    return this.ejerciciosService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Ejercicio | null> {
    return this.ejerciciosService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<Ejercicio> {
    return this.ejerciciosService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<Ejercicio | null> {
    return this.ejerciciosService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.ejerciciosService.delete(Number(id));
  }
}
