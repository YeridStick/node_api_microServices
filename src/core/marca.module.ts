import { Module } from '@nestjs/common';
import { MarcaController } from '../adapter/input/MarcaController';
import { MarcaServices } from './services/marca.service';
import { MarcaRepository } from '../adapter/output/marcaRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './model/Marca';

@Module({
  imports: [TypeOrmModule.forFeature([Marca])], 
  controllers: [MarcaController],
  providers: [MarcaServices, MarcaRepository],
  exports: [MarcaRepository],
})
export class MarcaModule {}
