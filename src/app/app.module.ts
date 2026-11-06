import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConceitosManualModule } from '../conceitos-manual/conceitos-manual.module.js';
import { ConceitosAutomanticoModule } from '../conceitos-automantico/conceitos-automantico.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'conceitos_nest',
    }),
    ConceitosManualModule,
    ConceitosAutomanticoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
