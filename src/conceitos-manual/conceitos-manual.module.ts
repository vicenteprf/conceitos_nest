import { Module } from '@nestjs/common';
import { ConceitosManualController } from './conceitos-manual.controller.js';

@Module({
  controllers: [ConceitosManualController],
})
export class ConceitosManualModule {}
