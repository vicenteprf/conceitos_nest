import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { RecadosModule } from '../recados/recados.module.js';

@Module({
  imports: [
    RecadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
