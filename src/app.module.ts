import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Lamineyamal192002!',
      database: 'gimnasio_fit_db',
      entities: [Usuario],
      synchronize: true, // TypeORM crea/actualiza tablas según las entities
    }),
    UsuariosModule,
  ],
})
export class AppModule {}

