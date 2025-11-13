// src/usuarios/usuarios.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  findOne(id: number): Promise<Usuario | null> {
    return this.usuariosRepository.findOne({ where: { id } });
  }

  create(data: any): Promise<Usuario> {
  const nuevo: Usuario = this.usuariosRepository.create(data as Usuario);
  return this.usuariosRepository.save(nuevo);
}

  async update(id: number, data: any): Promise<Usuario | null> {
    const usuario = await this.usuariosRepository.findOne({ where: { id } });

    if (!usuario) {
      return null; // aquí admitimos que puede regresar null
    }

    Object.assign(usuario, data);
    return this.usuariosRepository.save(usuario);
  }

  async delete(id: number): Promise<boolean> {
  const result = await this.usuariosRepository.delete(id);

  if (!result.affected) {
    return false;
  }

  return result.affected > 0;
}

}
