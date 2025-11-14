// src/logs_sistema/logs_sistema.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogSistema } from './log_sistema.entity';
import { LogsSistemaService } from './logs_sistema.service';
import { LogsSistemaController } from './logs_sistema.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LogSistema])],
  providers: [LogsSistemaService],
  controllers: [LogsSistemaController],
})
export class LogsSistemaModule {}
