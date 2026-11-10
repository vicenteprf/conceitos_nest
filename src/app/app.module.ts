import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConceitosManualModule } from '../conceitos-manual/conceitos-manual.module.js';
import { ConceitosAutomaticoModule } from '../conceitos-automatico/conceitos-automatico.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'conceitos_nest',
    }),
    ConceitosManualModule,
    ConceitosAutomaticoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
