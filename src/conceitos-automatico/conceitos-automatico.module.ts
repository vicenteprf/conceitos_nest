import { Module } from '@nestjs/common';
import { ConceitosAutomaticoController } from './conceitos-automatico.controller.js';

@Module({
  controllers: [ConceitosAutomaticoController],
})
export class ConceitosAutomaticoModule {}
