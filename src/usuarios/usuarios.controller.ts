// src/usuarios/usuarios.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  getAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Usuario | null> {
    return this.usuariosService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): Promise<Usuario> {
    return this.usuariosService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<Usuario | null> {
    return this.usuariosService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.usuariosService.delete(Number(id));
  }
}

