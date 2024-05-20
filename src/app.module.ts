import { Module } from '@nestjs/common';
import { AutomovilModule } from './core/automovil.module';
import { DatabaseModule } from './resources/database.module';
import { MarcaModule } from './core/marca.module';
import { EurekaModule } from './eureka.module';

@Module({
  imports: [
    DatabaseModule,
    AutomovilModule,
    MarcaModule,
    EurekaModule,
  ],
})
export class AppModule {}
