// src/logs_sistema/logs_sistema.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LogsSistemaService } from './logs_sistema.service';
import { LogSistema } from './log_sistema.entity';

@Controller('logs_sistema')
export class LogsSistemaController {
  constructor(private readonly logsSistemaService: LogsSistemaService) {}

  @Get()
  getAll(): Promise<LogSistema[]> {
    return this.logsSistemaService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<LogSistema | null> {
    return this.logsSistemaService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<LogSistema> {
    return this.logsSistemaService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<LogSistema | null> {
    return this.logsSistemaService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.logsSistemaService.delete(Number(id));
  }
}
