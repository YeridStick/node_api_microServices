"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcaModule = void 0;
const common_1 = require("@nestjs/common");
const MarcaController_1 = require("../adapter/input/MarcaController");
const marca_service_1 = require("./services/marca.service");
const marcaRepository_1 = require("../adapter/output/marcaRepository");
const typeorm_1 = require("@nestjs/typeorm");
const Marca_1 = require("./entity/Marca");
let MarcaModule = class MarcaModule {
};
exports.MarcaModule = MarcaModule;
exports.MarcaModule = MarcaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Marca_1.Marca])],
        controllers: [MarcaController_1.MarcaController],
        providers: [marca_service_1.MarcaServices, marcaRepository_1.MarcaRepository],
        exports: [marcaRepository_1.MarcaRepository],
    })
], MarcaModule);
