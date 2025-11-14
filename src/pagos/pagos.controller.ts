// src/pagos/pagos.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { Pago } from './pago.entity';

@Controller('pagos')
export class PagosController {
  constructor(private readonly pagosService: PagosService) {}

  @Get()
  getAll(): Promise<Pago[]> {
    return this.pagosService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Pago | null> {
    return this.pagosService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<Pago> {
    return this.pagosService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<Pago | null> {
    return this.pagosService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.pagosService.delete(Number(id));
  }
}
