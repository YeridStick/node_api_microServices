"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EurekaModule = void 0;
const common_1 = require("@nestjs/common");
const eureka_js_client_1 = require("eureka-js-client");
let EurekaModule = class EurekaModule {
    constructor(eurekaClient) {
        this.eurekaClient = eurekaClient;
    }
    onModuleInit() {
        this.eurekaClient.start((error) => {
            if (error) {
                console.error('Error starting Eureka client:', error);
            }
            else {
                console.log('Eureka client started successfully');
            }
        });
    }
};
exports.EurekaModule = EurekaModule;
exports.EurekaModule = EurekaModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: 'EUREKA_CLIENT',
                useFactory: () => {
                    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8020; // Convertir a número
                    return new eureka_js_client_1.Eureka({
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
    }),
    __param(0, (0, common_1.Inject)('EUREKA_CLIENT')),
    __metadata("design:paramtypes", [eureka_js_client_1.Eureka])
], EurekaModule);
