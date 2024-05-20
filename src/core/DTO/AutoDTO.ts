import { IsNotEmpty, IsString } from "class-validator";

export class AutomovilDto {
  @IsNotEmpty()
  @IsString()
  modelo!: string;

  @IsNotEmpty()
  @IsString()
  descripcion!: string;

  @IsNotEmpty()
  precio!: number;

  @IsNotEmpty()
  kilometraje!: number;

  @IsNotEmpty()
  @IsString()
  marca_id!: string; 
}
