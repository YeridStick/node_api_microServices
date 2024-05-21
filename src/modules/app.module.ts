import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { AutomovilModule } from '../core/automovil.module';
import { MarcaModule } from '../core/marca.module';
import { ClientModule } from '../core/client.module';

@Module({
  imports: [
    DatabaseModule,
    AutomovilModule,
    MarcaModule,
    ClientModule
  ]
})
export class AppModule {}
