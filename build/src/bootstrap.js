"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API de Autos')
        .setDescription('API para gestionar autos y marcas')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    const port = process.env.PORT || 8020;
    await app.listen(port, () => {
        console.log(`La aplicación está escuchando en el puerto ${port}`);
        console.log(`Swagger UI disponible en http://localhost:${port}/api-docs`);
    });
}
bootstrap();
