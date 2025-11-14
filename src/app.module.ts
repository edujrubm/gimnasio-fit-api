// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuario.entity';

import { EjerciciosModule } from './ejercicios/ejercicios.module';
import { Ejercicio } from './ejercicios/ejercicio.entity';

import { RutinasModule } from './rutinas/rutinas.module';
import { Rutina } from './rutinas/rutina.entity';

import { DietasModule } from './dietas/dietas.module';
import { Dieta } from './dietas/dieta.entity';

import { RecetasModule } from './recetas/recetas.module';
import { Receta } from './recetas/receta.entity';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Lamineyamal192002!',
      database: 'gimnasio_fit_db',
      entities: [Usuario, Ejercicio, Rutina, Dieta, Receta],
      synchronize: true,
    }),
    UsuariosModule,
    EjerciciosModule,
    RutinasModule,
    DietasModule,
    RecetasModule,
    AuthModule,
  ],
})
export class AppModule {}
