import { Injectable } from "@nestjs/common";
import { AutomovilRepository } from "../../adapter/output/repository";
import { Automovil } from "../model/Automovil";
import { MarcaRepository } from "../../adapter/output/marcaRepository";

import { AutomovilDto } from "../DTO/AutoDTO";
import { Marca } from "../model/Marca";

@Injectable()
export class AutomovilService {
  constructor(
    private automovilRepository: AutomovilRepository,
    private marcaRepository: MarcaRepository
  ) {}

  private toAutomovilEntity(dto: AutomovilDto): Automovil {
    const entity = new Automovil();
    entity.modelo = dto.modelo;
    entity.descripcion = dto.descripcion;
    entity.precio = dto.precio;
    entity.kilometraje = dto.kilometraje;
    entity.marca = new Marca();
    entity.marca.id = dto.marca_id;
    return entity;
  }

  findAll(): Promise<Automovil[]> {
    return this.automovilRepository.listarTodosLosAutomoviles();
  }

  findOne(id: string): Promise<Automovil | null> {
    return this.automovilRepository.buscarPorId(id);
  }

  async create(automovilDto: AutomovilDto): Promise<Automovil> {
    try {
      const automovilEntity = this.toAutomovilEntity(automovilDto);
      if (!automovilEntity.marca.id) {
        throw new Error("Marca no especificada en el automovil");
      }
      const marcaExiste = await this.marcaRepository.buscarPorId(
        automovilEntity.marca!.id
      );
      console.log('Marca: ')
      console.table(marcaExiste)
      
      if (!marcaExiste) {
        throw new Error("Marca no encontrada");
      }

      automovilEntity.marca.nombre = marcaExiste.nombre;

      return this.automovilRepository.crearAuto(automovilEntity);
    } catch (error) {
      console.error((error as any).message);
      throw error;
    }
  }

  async update(id: string, automovilDto: AutomovilDto): Promise<void> {
    try {
      const automovilEntity = this.toAutomovilEntity(automovilDto);
  
      const existe = await this.automovilRepository.buscarPorId(id);
      if (!existe) {
        throw new Error("Automovil no registrado");
      }

      const marcaExiste = await this.marcaRepository.buscarPorId(automovilEntity.marca.id);
      if (!marcaExiste) {
        throw new Error("Marca no encontrada");
      }
  
      return this.automovilRepository.editarAuto(id, automovilEntity);
    } catch (error) {
      console.error((error as any).message);
      throw error;
    }
  }
  

  remove(id: string): Promise<void> {
    return this.automovilRepository.eliminarAuto(id);
  }
}
