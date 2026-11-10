import { Module } from '@nestjs/common';
import { ConceitosAutomaticoController } from './conceitos-automatico.controller.js';
import { ConceitosAutomaticoService } from './conceitos-automatico.service.js';

@Module({
  controllers: [ConceitosAutomaticoController],
  providers: [ConceitosAutomaticoService],
})
export class ConceitosAutomaticoModule {}
