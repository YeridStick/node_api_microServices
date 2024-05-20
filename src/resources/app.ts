import { NestFactory } from '@nestjs/core';
import { AppModule } from '../modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
//import { Eureka } from 'eureka-js-client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Autos')
    .setDescription('API para gestionar autos y marcas')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  /* Iniciar Eureka Client
  const eurekaClient = app.get<Eureka>('EUREKA_CLIENT');
  eurekaClient.start((error: any) => {
    if (error) {
      console.error('Error starting Eureka client:', error);
    } else {
      console.log('Eureka client started successfully');
    }
  });*/

  const port = process.env.PORT || 8020;
  await app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
    console.log(`Swagger UI disponible en http://localhost:${port}/api-docs`);
  });
}

bootstrap();
