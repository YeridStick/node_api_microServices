import { Module, OnModuleInit, Inject } from '@nestjs/common';
import { Eureka } from 'eureka-js-client';

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
            ipAddr: '127.0.0.1',
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
            port: 8761,
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
        console.log('Eureka client started successfully');
      }
    });
  }
}
