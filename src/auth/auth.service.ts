// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  // En un proyecto pro esto iría en .env, pero aquí lo dejamos simple
  private readonly jwtSecret = 'mi_secreto_super_simple';

  constructor(private readonly usuariosService: UsuariosService) {}

  async login(email: string, password: string): Promise<{ token: string } | null> {
    const usuario = await this.usuariosService.findByEmail(email);

    if (!usuario) {
      return null;
    }

    // Aquí comparamos en crudo, sin encriptar, para hacerlo simple
    if (usuario.password !== password) {
      return null;
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
        rol: usuario.rol,
      },
      this.jwtSecret,
      {
        expiresIn: '1h',
      },
    );

    return { token };
  }

  verificarToken(token: string): any {
    try {
      const payload = jwt.verify(token, this.jwtSecret);
      return payload;
    } catch (error) {
      return null;
    }
  }
}
