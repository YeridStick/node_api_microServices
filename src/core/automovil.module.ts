import { Module } from '@nestjs/common';
import { AutomovilController } from '../adapter/input/AutomovilController';
import { AutomovilService } from './services/automovil.service';
import { AutomovilRepository } from '../adapter/output/repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Automovil } from './entity/Automovil';
import { MarcaModule } from './marca.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Automovil]),
    MarcaModule,
  ],
  controllers: [AutomovilController],
  providers: [AutomovilService, AutomovilRepository],
})
export class AutomovilModule {}
