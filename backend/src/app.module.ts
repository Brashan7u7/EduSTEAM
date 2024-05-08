import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from './alumnos/controller/controller.controller';
import { ControllerController } from './progreso-alumnos/controller/controller.controller';
import { ControllerController } from './id-curso/controller/controller.controller';
import { ControllerController } from './profesores/controller/controller.controller';
import { ControllerController } from './preguntas/controller/controller.controller';
import { ControllerController } from './quiz/controller/controller.controller';
import { ControllerController } from './temas/controller/controller.controller';
import { ControllerController } from './admin/controller/controller.controller';
import { ControllerController } from './subtemas/controller/controller.controller';
import { ControllerController } from './actividades/controller/controller.controller';

@Module({
  imports: [],
  controllers: [AppController, ControllerController],
  providers: [AppService],
})
export class AppModule {}
