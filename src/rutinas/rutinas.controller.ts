// src/rutinas/rutinas.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RutinasService } from './rutinas.service';
import { Rutina } from './rutina.entity';

@Controller('rutinas')
export class RutinasController {
  constructor(private readonly rutinasService: RutinasService) {}

  @Get()
  getAll(): Promise<Rutina[]> {
    return this.rutinasService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Rutina | null> {
    return this.rutinasService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<Rutina> {
    return this.rutinasService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<Rutina | null> {
    return this.rutinasService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.rutinasService.delete(Number(id));
  }
}
