import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateRecadoDto } from './create-recado.dto.js';

export class UpdateRecadoDto extends PartialType(CreateRecadoDto) {
  @IsBoolean()
  @IsOptional()
  readonly lido?: boolean;
}
