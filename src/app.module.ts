import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// aquí van tus imports de entidades:
import { Usuario } from './usuarios/usuario.entity';
import { Ejercicio } from './ejercicios/ejercicio.entity';
// ...todas tus demás entidades...

// aquí van tus imports de módulos:
import { UsuariosModule } from './usuarios/usuarios.module';
import { EjerciciosModule } from './ejercicios/ejercicios.module';
// ...todos tus demás módulos...

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // 👈 IMPORTANTE: ya no 'mysql'
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'gimnasio_fit_db',
      entities: [
        Usuario,
        Ejercicio,
        // aquí pones TODAS las entidades que ya tenías
        // Rutina, Dieta, Receta, Suplemento, Clase, etc...
      ],
      synchronize: true,
    }),

    UsuariosModule,
    EjerciciosModule,
    // ...todos tus módulos...
  ],
})
export class AppModule {}
