import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module"; // Asegúrate de que la ruta a AppModule sea correcta
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Crea la aplicación NestJS directamente
  await app.init(); // Inicializa la aplicación

  // Configuración de Swagger
  const config = new DocumentBuilder()
  .setTitle('API de Autos')
  .setDescription('API para gestionar autos y marcas')
  .setVersion('1.0')
   // Agrega tags si es necesario
   //.addTag('tag-name')
  .build();
  const document = SwaggerModule.createDocument(app, config); // Usa la instancia de INestApplication creada
  SwaggerModule.setup('api-docs', app, document); // Y también aquí

  const port = 8020;
  await app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
    console.log(`Swagger UI disponible en http://localhost:${port}/api-docs`);
  });
}

bootstrap();
