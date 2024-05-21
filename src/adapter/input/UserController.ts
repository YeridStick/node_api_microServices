import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../core/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly user: UserService) {}

  @Get()
  async getProductos() { 
    return await this.user.getUsers(); 
  }
}
