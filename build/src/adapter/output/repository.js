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
exports.AutomovilRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Automovil_1 = require("../../core/entity/Automovil");
let AutomovilRepository = class AutomovilRepository {
    constructor(automovilRepository) {
        this.automovilRepository = automovilRepository;
    }
    async crearAuto(automovil) {
        return this.automovilRepository.save(automovil);
    }
    async editarAuto(id, automovil) {
        await this.automovilRepository.update(id, automovil);
    }
    async eliminarAuto(id) {
        await this.automovilRepository.delete(id);
    }
    async buscarPorId(id) {
        return this.automovilRepository.createQueryBuilder('automovil')
            .where('automovil.id = :id', { id })
            .getOne();
    }
    async buscarPorNombre(nombre) {
        return this.automovilRepository.createQueryBuilder('automovil')
            .where('automovil.nombre = :nombre', { nombre })
            .getMany();
    }
    async buscarPorModelo(modelo) {
        return this.automovilRepository.createQueryBuilder('automovil')
            .where('automovil.modelo = :modelo', { modelo })
            .getMany();
    }
    async listarTodosLosAutomoviles() {
        return this.automovilRepository.find();
    }
};
exports.AutomovilRepository = AutomovilRepository;
exports.AutomovilRepository = AutomovilRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Automovil_1.Automovil)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AutomovilRepository);
