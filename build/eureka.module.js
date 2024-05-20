"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EurekaModule = void 0;
// eureka.module.ts
const common_1 = require("@nestjs/common");
const eureka_js_client_1 = require("eureka-js-client");
let EurekaModule = class EurekaModule {
};
exports.EurekaModule = EurekaModule;
exports.EurekaModule = EurekaModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: 'EUREKA_CLIENT', // Puedes usar cualquier nombre aquí
                useFactory: () => {
                    return new eureka_js_client_1.Eureka({
                        instance: {
                            app: 'my-node-service', // Nombre de tu microservicio
                            hostName: 'localhost', // Cambia esto según tu entorno
                            ipAddr: '127.0.0.1', // Cambia esto según tu entorno
                            port: {
                                '$': 8020, // Puerto de tu microservicio
                                '@enabled': true,
                            },
                            vipAddress: 'my-node-service', // Nombre VIP (opcional)
                            dataCenterInfo: {
                                '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
                                name: 'MyOwn',
                            },
                        },
                        eureka: {
                            host: 'localhost', // Dirección del servidor Eureka
                            port: 8761, // Puerto del servidor Eureka
                            servicePath: '/eureka/apps/', // Ruta del servicio Eureka
                        },
                    });
                },
            },
        ],
        exports: ['EUREKA_CLIENT'], // Exporta el cliente para que otros módulos puedan usarlo
    })
], EurekaModule);
