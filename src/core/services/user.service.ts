import { Injectable, Inject } from '@nestjs/common';
import { Eureka } from 'eureka-js-client';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @Inject('EUREKA_CLIENT') private readonly eurekaClient: Eureka,
    private readonly httpService: HttpService
  ) {}

  async getUsers() {
    console.log('Fetching instances for USER service');
    const instances = this.eurekaClient.getInstancesByAppId('USER');
    console.log('Instances found:', instances);

    if (instances.length === 0) {
      throw new Error('No instances found for USER service');
    }

    const instance = instances[0];
    const instancePort = instance.port ? (instance.port as any).$ || instance.port : undefined;
    if (!instancePort) {
      throw new Error('Instance port is undefined');
    }

    // Usar localhost en lugar de instance.ipAddr
    const url = `http://localhost:${instancePort}/api/user/user/listar`;
    //const url = `http://${instance.ipAddr}:${instancePort}/api/user/listar`;
    console.log('Requesting URL:', url);

    try {
      const response = await lastValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      let errorMessage = 'Error fetching users';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
}
