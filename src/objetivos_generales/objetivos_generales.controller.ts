// src/objetivos_generales/objetivos_generales.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ObjetivosGeneralesService } from './objetivos_generales.service';
import { ObjetivoGeneral } from './objetivo_general.entity';

@Controller('objetivos_generales')
export class ObjetivosGeneralesController {
  constructor(
    private readonly objetivosGeneralesService: ObjetivosGeneralesService,
  ) {}

  @Get()
  getAll(): Promise<ObjetivoGeneral[]> {
    return this.objetivosGeneralesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<ObjetivoGeneral | null> {
    return this.objetivosGeneralesService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<ObjetivoGeneral> {
    return this.objetivosGeneralesService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<ObjetivoGeneral | null> {
    return this.objetivosGeneralesService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.objetivosGeneralesService.delete(Number(id));
  }
}
