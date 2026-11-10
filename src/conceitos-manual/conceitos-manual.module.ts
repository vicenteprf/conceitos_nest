import { Module } from '@nestjs/common';
import { ConceitosManualController } from './conceitos-manual.controller.js';
import { ConceitosManualService } from './conceitos-manual.service.js';

@Module({
  controllers: [ConceitosManualController],
  providers: [ConceitosManualService],
})
export class ConceitosManualModule {}
