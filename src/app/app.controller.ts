import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service.js';

@Controller('home') //home
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return 'Qualquer coisa.';
  }
}
