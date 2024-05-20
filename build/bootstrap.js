"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./src/app.module");
const swagger_1 = require("@nestjs/swagger");
//import { Eureka } from 'eureka-js-client';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Configuración de Swagger
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API de Autos')
        .setDescription('API para gestionar autos y marcas')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
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
