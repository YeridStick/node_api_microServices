import { Controller, Get } from '@nestjs/common';
import { ProductoService } from '../../core/services/producto.service';

@Controller('productos')
export class ProductoController {
  constructor(private readonly producto: ProductoService) {}

  @Get()
  async getProductos() { 
    try {
      const producto = await this.producto.getProductos(); 
      return producto; 
    } catch (error) {
      let errorMessage = 'Error fetching users';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      return { message: errorMessage };
    }
  }
}
