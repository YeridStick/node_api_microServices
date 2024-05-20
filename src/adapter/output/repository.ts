import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Automovil } from '../../core/entity/Automovil';

@Injectable()
export class AutomovilRepository {
  constructor(
    @InjectRepository(Automovil)
    private automovilRepository: Repository<Automovil>,
  ) {}

  async crearAuto(automovil: Automovil): Promise<Automovil> {
    return this.automovilRepository.save(automovil);
  }

  async editarAuto(id: string, automovil: Partial<Automovil>): Promise<void> {
    await this.automovilRepository.update(id, automovil);
  }

  async eliminarAuto(id: string): Promise<void> {
    await this.automovilRepository.delete(id);
  }
  
  async buscarPorId(id: string): Promise<Automovil | null> {
    return this.automovilRepository.createQueryBuilder('automovil')
     .where('automovil.id = :id', { id }) 
     .getOne();
  }
  
  async buscarPorNombre(nombre: string): Promise<Automovil[]> {
    return this.automovilRepository.createQueryBuilder('automovil')
     .where('automovil.nombre = :nombre', { nombre })
     .getMany();
  }

  async buscarPorModelo(modelo: string): Promise<Automovil[]> {
    return this.automovilRepository.createQueryBuilder('automovil')
     .where('automovil.modelo = :modelo', { modelo })
     .getMany();
  }

  async listarTodosLosAutomoviles(): Promise<Automovil[]> {
    return this.automovilRepository.find();
  }
}
