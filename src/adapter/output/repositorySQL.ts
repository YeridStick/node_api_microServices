import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Automovil } from '../../core/model/Automovil';

@Injectable()
export class AutomovilRepository {
  constructor(
    @InjectRepository(Automovil)
    private automovilRepository: Repository<Automovil>,
  ) {}

  async findAutosByModelo(modelo: string): Promise<Automovil[]> {
    const query = `
      SELECT * FROM automovil WHERE modelo = $1
    `;
    return this.automovilRepository.query(query, [modelo]);
  }
}
