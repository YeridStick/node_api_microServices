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
exports.MarcaRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Marca_1 = require("../../core/entity/Marca");
let MarcaRepository = class MarcaRepository {
    constructor(marcaRepository) {
        this.marcaRepository = marcaRepository;
    }
    // En MarcaRepository
    async crearMarca(marca) {
        try {
            const savedMarca = await this.marcaRepository.save(marca);
            return savedMarca;
        }
        catch (error) {
            console.error('Error al guardar la marca:', error);
            throw error;
        }
    }
    async editarMarca(id, marca) {
        await this.marcaRepository.update(id, marca);
    }
    async eliminarMarca(id) {
        await this.marcaRepository.delete(id);
    }
    async buscarPorId(id) {
        return this.marcaRepository
            .createQueryBuilder("marca")
            .where("marca.id = :id", { id })
            .getOne();
    }
    async buscarPorNombre(nombre) {
        return this.marcaRepository
            .createQueryBuilder("marca")
            .where("marca.nombre = :nombre", { nombre })
            .getMany();
    }
    async listarTodasLasMarcas() {
        return this.marcaRepository.find();
    }
};
exports.MarcaRepository = MarcaRepository;
exports.MarcaRepository = MarcaRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Marca_1.Marca)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MarcaRepository);
