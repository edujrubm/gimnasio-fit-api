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

import { SuplementosModule } from './suplementos/suplementos.module';
import { Suplemento } from './suplementos/suplemento.entity';

import { ClasesModule } from './clases/clases.module';
import { Clase } from './clases/clase.entity';

import { MembresiasModule } from './membresias/membresias.module';
import { Membresia } from './membresias/membresia.entity';

import { InstructoresModule } from './instructores/instructores.module';
import { Instructor } from './instructores/instructor.entity';

import { PagosModule } from './pagos/pagos.module';
import { Pago } from './pagos/pago.entity';

import { AsistenciasModule } from './asistencias/asistencias.module';
import { Asistencia } from './asistencias/asistencia.entity';

import { PromocionesModule } from './promociones/promociones.module';
import { Promocion } from './promociones/promocion.entity';

import { TipsSaludModule } from './tips_salud/tips_salud.module';
import { TipSalud } from './tips_salud/tip_salud.entity';

import { ObjetivosGeneralesModule } from './objetivos_generales/objetivos_generales.module';
import { ObjetivoGeneral } from './objetivos_generales/objetivo_general.entity';

import { LogsSistemaModule } from './logs_sistema/logs_sistema.module';
import { LogSistema } from './logs_sistema/log_sistema.entity';

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
      entities: [
        Usuario,
        Ejercicio,
        Rutina,
        Dieta,
        Receta,
        Suplemento,
        Clase,
        Membresia,
        Instructor,
        Pago,
        Asistencia,
        Promocion,
        TipSalud,
        ObjetivoGeneral,
        LogSistema,
      ],
      synchronize: true,
    }),
    UsuariosModule,
    EjerciciosModule,
    RutinasModule,
    DietasModule,
    RecetasModule,
    SuplementosModule,
    ClasesModule,
    MembresiasModule,
    InstructoresModule,
    PagosModule,
    AsistenciasModule,
    PromocionesModule,
    TipsSaludModule,
    ObjetivosGeneralesModule,
    LogsSistemaModule,
    AuthModule,
  ],
})
export class AppModule {}
