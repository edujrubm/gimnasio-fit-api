// src/suplementos/suplementos.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SuplementosService } from './suplementos.service';
import { Suplemento } from './suplemento.entity';

@Controller('suplementos')
export class SuplementosController {
  constructor(private readonly suplementosService: SuplementosService) {}

  @Get()
  getAll(): Promise<Suplemento[]> {
    return this.suplementosService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Suplemento | null> {
    return this.suplementosService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<Suplemento> {
    return this.suplementosService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<Suplemento | null> {
    return this.suplementosService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.suplementosService.delete(Number(id));
  }
}
