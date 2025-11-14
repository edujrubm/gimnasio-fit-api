// src/promociones/promociones.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PromocionesService } from './promociones.service';
import { Promocion } from './promocion.entity';

@Controller('promociones')
export class PromocionesController {
  constructor(private readonly promocionesService: PromocionesService) {}

  @Get()
  getAll(): Promise<Promocion[]> {
    return this.promocionesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Promocion | null> {
    return this.promocionesService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<Promocion> {
    return this.promocionesService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<Promocion | null> {
    return this.promocionesService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.promocionesService.delete(id as any);
  }
}
