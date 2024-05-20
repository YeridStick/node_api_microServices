import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Marca } from './Marca';

@Entity()
export class Automovil {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: "varchar",
    nullable: false,
    length: 30,
  })
  modelo!: string;

  @Column({
    type: "text",
    nullable: false,
  })
  descripcion!: string;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: false,
  })
  precio!: number;

  @Column({
    type: "int",
    nullable: false,
  })
  kilometraje!: number;

  @ManyToOne(() => Marca, marca => marca.id) 
  @JoinColumn({ name: "marca_id" }) 
  marca!: Marca; 
}
