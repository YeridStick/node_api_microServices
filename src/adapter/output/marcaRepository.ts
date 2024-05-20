import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Marca } from "../../core/model/Marca";

@Injectable()
export class MarcaRepository {
  constructor(
    @InjectRepository(Marca)
    private marcaRepository: Repository<Marca>
  ) {}

  // En MarcaRepository
async crearMarca(marca: Marca): Promise<Marca> {
    try {
      const savedMarca = await this.marcaRepository.save(marca);
      return savedMarca;
    } catch (error) {
      console.error('Error al guardar la marca:', error);
      throw error;
    }
  }
  

  async editarMarca(id: string, marca: Partial<Marca>): Promise<void> {
    await this.marcaRepository.update(id, marca);
  }

  async eliminarMarca(id: string): Promise<void> {
    await this.marcaRepository.delete(id);
  }

  async buscarPorId(id: string): Promise<Marca | null> {
    return this.marcaRepository
      .createQueryBuilder("marca")
      .where("marca.id = :id", { id })
      .getOne();
  }

  async buscarPorNombre(nombre: string): Promise<Marca[]> {
    return this.marcaRepository
      .createQueryBuilder("marca")
      .where("marca.nombre = :nombre", { nombre })
      .getMany();
  }

  async listarTodasLasMarcas(): Promise<Marca[]> {
    return this.marcaRepository.find();
  }
}
