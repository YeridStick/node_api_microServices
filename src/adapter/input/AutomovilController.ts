import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AutomovilService } from '../../core/services/automovil.service';
import { Automovil } from '../../core/entity/Automovil';
import { AutomovilDto } from '../../core/DTO/AutoDTO';

@Controller('automoviles')
export class AutomovilController {
  constructor(private readonly automovilService: AutomovilService) {}

  @Get()
  findAll(): Promise<Automovil[]> {
    return this.automovilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Automovil | null> {
    return this.automovilService.findOne(id);
  }

  @Post()
  create(@Body() automovil: AutomovilDto): Promise<Automovil> {
    return this.automovilService.create(automovil);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() automovil: AutomovilDto): Promise<void> {
    return this.automovilService.update(id, automovil);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.automovilService.remove(id);
  }
}
