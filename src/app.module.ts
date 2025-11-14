// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entidades
import { Usuario } from './usuarios/usuario.entity';
import { Ejercicio } from './ejercicios/ejercicio.entity';
import { Rutina } from './rutinas/rutina.entity';
import { Dieta } from './dietas/dieta.entity';
import { Receta } from './recetas/receta.entity';
import { Suplemento } from './suplementos/suplemento.entity';
import { Clase } from './clases/clase.entity';
import { Membresia } from './membresias/membresia.entity';
import { Instructor } from './instructores/instructor.entity';
import { Pago } from './pagos/pago.entity';
import { Asistencia } from './asistencias/asistencia.entity';
import { Promocion } from './promociones/promocion.entity';
import { TipSalud } from './tips_salud/tip_salud.entity';
import { ObjetivoGeneral } from './objetivos_generales/objetivo_general.entity';
import { LogSistema } from './logs_sistema/log_sistema.entity';

// Módulos
import { UsuariosModule } from './usuarios/usuarios.module';
import { EjerciciosModule } from './ejercicios/ejercicios.module';
import { RutinasModule } from './rutinas/rutinas.module';
import { DietasModule } from './dietas/dietas.module';
import { RecetasModule } from './recetas/recetas.module';
import { SuplementosModule } from './suplementos/suplementos.module';
import { ClasesModule } from './clases/clases.module';
import { MembresiasModule } from './membresias/membresias.module';
import { InstructoresModule } from './instructores/instructores.module';
import { PagosModule } from './pagos/pagos.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { PromocionesModule } from './promociones/promociones.module';
import { TipsSaludModule } from './tips_salud/tips_salud.module';
import { ObjetivosGeneralesModule } from './objetivos_generales/objetivos_generales.module';
import { LogsSistemaModule } from './logs_sistema/logs_sistema.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'dpg-d4bd4c0dl3ps739ak2s0-a',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'gimnasio_fit_db_user',
      password: process.env.DB_PASSWORD || 'FBuMiEx8ZXeYkdrcgdDr8WMVJZAdiiyr',
      database: process.env.DB_NAME || 'gimnasio_fit_db',
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
