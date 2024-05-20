import { Controller, Get, Put, Post, Delete, Param, Body } from "@nestjs/common";
import { MarcaServices } from "../../core/services/marca.service";
import { Marca } from "../../core/model/Marca";

@Controller("marca")
export class MarcaController {
  constructor(private readonly marcaServices: MarcaServices) {}

  @Get()
  findAll(): Promise<Marca[]> {
    return this.marcaServices.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Marca | null> {
    return this.marcaServices.findOne(id);
  }

  // En MarcaController
  @Post(":nombre")
  create(@Param("nombre") nombre: string): Promise<Marca> {
    return this.marcaServices.create(nombre);
  }

  @Put(":id")
  update(
    @Param("id") id: string,
    @Body() automovil: Partial<Marca>
  ): Promise<void> {
    return this.marcaServices.update(id, automovil);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.marcaServices.remove(id);
  }
}
