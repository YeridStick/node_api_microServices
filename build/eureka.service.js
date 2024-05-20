"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa Eureka desde eureka-js-client
const eureka_js_client_1 = __importDefault(require("eureka-js-client"));
const eurekaOptions = {
    instance: {
        app: 'nodets', // Nombre de tu aplicación
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: {
            '$': process.env.PORT || 8020, // Usa la variable de entorno PORT o el valor predeterminado 8020
            '@enabled': 'true',
        },
        vipAddress: 'nodets',
        statusPageUrl: `http://localhost:${process.env.PORT || 8020}/api-docs`,
        healthCheckUrl: `http://localhost:${process.env.PORT || 8020}/health`,
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        // Configuración del cliente Eureka
        servicePath: '/eureka/apps/nodets/',
        region: 'us-west',
        fetchRegistry: true,
        shouldRegisterWithEureka: true,
        eurekaServer: ['http://localhost:8761/eureka'],
    },
};
const eurekaClient = new eureka_js_client_1.default(eurekaOptions);
eurekaClient.start((err) => {
    if (err) {
        console.error('Error al iniciar el cliente Eureka:', err);
    }
    else {
        console.log('Cliente Eureka iniciado correctamente.');
    }
});
eurekaClient.register({}, (error, body) => {
    if (error) {
        console.error('Error al registrar la aplicación:', error);
    }
    else {
        console.log('Registro exitoso:', body);
    }
});
