import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  // Encontrar todos os recados
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return 'Essa rota retorna todos os recados';
  }

  //Encontra um recado
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Essa rota retorna o recados ID ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    console.log(body);
    return body;
  }
}
