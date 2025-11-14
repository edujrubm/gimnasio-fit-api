// src/membresias/membresias.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MembresiasService } from './membresias.service';
import { Membresia } from './membresia.entity';

@Controller('membresias')
export class MembresiasController {
  constructor(private readonly membresiasService: MembresiasService) {}

  @Get()
  getAll(): Promise<Membresia[]> {
    return this.membresiasService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Membresia | null> {
    return this.membresiasService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<Membresia> {
    return this.membresiasService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<Membresia | null> {
    return this.membresiasService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.membresiasService.delete(Number(id));
  }
}
