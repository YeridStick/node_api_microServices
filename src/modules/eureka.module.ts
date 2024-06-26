import { Module, OnModuleInit, Inject } from '@nestjs/common';
import { Eureka } from 'eureka-js-client';

const eurekaPort = process.env.EUREKAPORT ? parseInt(process.env.EUREKAPORT, 10) : 8761; // Mover la definición fuera

@Module({
  providers: [
    {
      provide: 'EUREKA_CLIENT',
      useFactory: () => {
        const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8020; // Convertir a número
        return new Eureka({
          instance: {
            app: 'node-ts-app', // Cambia a tu nombre de aplicación
            hostName: process.env.HOSTNAME || 'localhost',
            ipAddr: '0.0.0.0', // Escucha en todas las interfaces de red
            port: {
              $: port, // Usa el valor convertido
              '@enabled': true,
            },
            vipAddress: 'node-ts-app', // Cambia a tu nombre de aplicación
            dataCenterInfo: {
              '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
              name: 'MyOwn',
            },
          },
          eureka: {
            host: 'localhost',
            port: eurekaPort,
            servicePath: '/eureka/apps/',
          },
        });
      },
    },
  ],
  exports: ['EUREKA_CLIENT'],
})
export class EurekaModule implements OnModuleInit {
  constructor(@Inject('EUREKA_CLIENT') private readonly eurekaClient: Eureka) {}

  onModuleInit() {
    this.eurekaClient.start((error: any) => {
      if (error) {
        console.error('Error starting Eureka client:', error);
      } else {
        console.log(`Eureka client started successfully. Access Eureka dashboard at http://localhost:${eurekaPort}`);
      }
    });
  }
}
