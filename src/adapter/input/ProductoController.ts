import { Controller, Get } from '@nestjs/common';
import { ProductoService } from '../../core/services/producto.service';

@Controller('productos')
export class ProductoController {
  constructor(private readonly producto: ProductoService) {}

  @Get()
  async getProductos() { 
    return await this.producto.getProductos();
  }
}
