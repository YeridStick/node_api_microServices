"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomovilModule = void 0;
const common_1 = require("@nestjs/common");
const AutomovilController_1 = require("../adapter/input/AutomovilController");
const automovil_service_1 = require("./services/automovil.service");
const repository_1 = require("../adapter/output/repository");
const typeorm_1 = require("@nestjs/typeorm");
const Automovil_1 = require("./entity/Automovil");
const marca_module_1 = require("./marca.module");
let AutomovilModule = class AutomovilModule {
};
exports.AutomovilModule = AutomovilModule;
exports.AutomovilModule = AutomovilModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Automovil_1.Automovil]),
            marca_module_1.MarcaModule,
        ],
        controllers: [AutomovilController_1.AutomovilController],
        providers: [automovil_service_1.AutomovilService, repository_1.AutomovilRepository],
    })
], AutomovilModule);
