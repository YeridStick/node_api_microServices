import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../core/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly user: UserService) {}

  @Get()
  async getProductos() { 
    try {
      const users = await this.user.getUsers(); 
      return users; 
    } catch (error) {
      let errorMessage = 'Error fetching users';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      return { message: errorMessage };
    }
  }
}
