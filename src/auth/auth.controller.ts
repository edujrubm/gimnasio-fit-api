// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    const { email, password } = body;

    const result = await this.authService.login(email, password);

    if (!result) {
      return { mensaje: 'Credenciales incorrectas' };
    }

    return result; // { token: '...' }
  }

  @Post('verificar')
  verificar(@Body() body: any) {
    const { token } = body;

    const payload = this.authService.verificarToken(token);

    if (!payload) {
      return { valido: false, mensaje: 'Token inválido o expirado' };
    }

    return {
      valido: true,
      usuario: payload, // aquí viene id, email, rol
    };
  }
}
