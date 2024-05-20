"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = __importDefault(require("express"));
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    const moduleRef = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(app));
    await moduleRef.init();
    // Configuración de Swagger
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Mi API')
        .setDescription('La descripción de la API')
        .setVersion('1.0')
        .addTag('mi-api')
        // **Opcional:** Considera agregar esquemas para modelos de datos si es aplicable
        // .addSchema(...schemas) // Reemplaza con tus esquemas de modelos de datos
        .build();
    // **Use `moduleRef` directly for Swagger creation**
    const document = swagger_1.SwaggerModule.createDocument(moduleRef, config);
    swagger_1.SwaggerModule.setup('api-docs', moduleRef, document);
    const port = process.env.PORT || 8020;
    await app.listen(port, () => {
        console.log(`La aplicación está escuchando en el puerto ${port}`);
    });
}
bootstrap();
