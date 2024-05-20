import { Injectable } from '@nestjs/common';
import { MarcaRepository } from '../../adapter/output/marcaRepository';
import { Marca } from '../entity/Marca';

@Injectable()
export class MarcaServices {
  constructor(private marcaRepository: MarcaRepository) {}

  findAll(): Promise<Marca[]> {
    return this.marcaRepository.listarTodasLasMarcas();
  }

  findOne(id: string): Promise<Marca | null> {
    return this.marcaRepository.buscarPorId(id);
  }

  async create(nombre: string): Promise<Marca> {
    const entity = new Marca();
    entity.nombre = nombre;
    console.log('Creando marca:', entity); 
    return this.marcaRepository.crearMarca(entity);
  }

  update(id: string, automovil: Partial<Marca>): Promise<void> {
    return this.marcaRepository.editarMarca(id, automovil);
  }

  remove(id: string): Promise<void> {
    return this.marcaRepository.eliminarMarca(id);
  }
}
