// src/instructores/instructores.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { InstructoresService } from './instructores.service';
import { Instructor } from './instructor.entity';

@Controller('instructores')
export class InstructoresController {
  constructor(private readonly instructoresService: InstructoresService) {}

  @Get()
  getAll(): Promise<Instructor[]> {
    return this.instructoresService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Instructor | null> {
    return this.instructoresService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<Instructor> {
    return this.instructoresService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<Instructor | null> {
    return this.instructoresService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.instructoresService.delete(Number(id));
  }
}
