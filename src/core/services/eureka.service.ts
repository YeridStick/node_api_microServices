import { Injectable, Inject } from '@nestjs/common';
import { Eureka } from 'eureka-js-client';

@Injectable()
export class EurekaService {
  constructor(@Inject('EUREKA_CLIENT') private readonly eurekaClient: Eureka) {}

  getInstance(serviceName: string) {
    const instances = this.eurekaClient.getInstancesByAppId(serviceName.toUpperCase());
    if (instances && instances.length > 0) {
      return instances[0];
    }
    throw new Error(`No instances found for service: ${serviceName}`);
  }
}
