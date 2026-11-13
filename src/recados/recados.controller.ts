import { Controller, Get } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  // Encontrar todos os recados
  @Get()
  findAll() {
    return 'Essa rota retorna todos os recados';
  }

  //Encontra um recado
  @Get(':id')
  findOne() {
    return 'Essa rota retorna um recados';
  }
}
