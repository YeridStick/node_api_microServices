import { Module } from "@nestjs/common";
import { ProductoService } from "../core/services/producto.service";
import { ProductoController } from "../adapter/input/ProductoController";
import { EurekaModule } from "../modules/eureka.module";
import { HttpModule } from "@nestjs/axios";
import { UserController } from "../adapter/input/UserController";
import { UserService } from "./services/user.service";

@Module({
  imports: [EurekaModule, HttpModule], // Importa EurekaModule aquí
  controllers: [ProductoController, UserController],
  providers: [ProductoService, UserService],
})
export class ClientModule {}
