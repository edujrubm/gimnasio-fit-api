// src/clases/clases.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ClasesService } from './clases.service';
import { Clase } from './clase.entity';

@Controller('clases')
export class ClasesController {
  constructor(private readonly clasesService: ClasesService) {}

  @Get()
  getAll(): Promise<Clase[]> {
    return this.clasesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Clase | null> {
    return this.clasesService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<Clase> {
    return this.clasesService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<Clase | null> {
    return this.clasesService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.clasesService.delete(Number(id));
  }
}
