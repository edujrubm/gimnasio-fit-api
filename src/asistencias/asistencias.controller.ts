// src/asistencias/asistencias.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { Asistencia } from './asistencia.entity';

@Controller('asistencias')
export class AsistenciasController {
  constructor(private readonly asistenciasService: AsistenciasService) {}

  @Get()
  getAll(): Promise<Asistencia[]> {
    return this.asistenciasService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Asistencia | null> {
    return this.asistenciasService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<Asistencia> {
    return this.asistenciasService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<Asistencia | null> {
    return this.asistenciasService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.asistenciasService.delete(Number(id));
  }
}
