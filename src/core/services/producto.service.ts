import { Injectable, Inject } from '@nestjs/common';
import { Eureka } from 'eureka-js-client';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ProductoService {
  constructor(
    @Inject('EUREKA_CLIENT') private readonly eurekaClient: Eureka,
    private readonly httpService: HttpService
  ) {}

  async getProductos() {
    console.log('Fetching instances for PRODUCTO service');
    const instances = this.eurekaClient.getInstancesByAppId('PRODUCTOS');
    console.log('Instances found:', instances);

    if (instances.length === 0) {
      throw new Error('No instances found for PRODUCTO service');
    }

    const instance = instances[0];
    const instancePort = instance.port ? (instance.port as any).$ || instance.port : undefined;
    if (!instancePort) {
      throw new Error('Instance port is undefined');
    }

    // Usar localhost en lugar de instance.ipAddr
    const url = `http://localhost:${instancePort}/api/producto/productos/listado`;
    //const url = `http://${instance.ipAddr}:${instancePort}/api/user/listar`;
    console.log('Requesting URL:', url);

    try {
      const response = await lastValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      let errorMessage = 'Error fetching productos';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
}
