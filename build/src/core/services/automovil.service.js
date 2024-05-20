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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomovilService = void 0;
const common_1 = require("@nestjs/common");
const repository_1 = require("../../adapter/output/repository");
const Automovil_1 = require("../entity/Automovil");
const marcaRepository_1 = require("../../adapter/output/marcaRepository");
const Marca_1 = require("../entity/Marca");
let AutomovilService = class AutomovilService {
    constructor(automovilRepository, marcaRepository) {
        this.automovilRepository = automovilRepository;
        this.marcaRepository = marcaRepository;
    }
    toAutomovilEntity(dto) {
        const entity = new Automovil_1.Automovil();
        entity.modelo = dto.modelo;
        entity.descripcion = dto.descripcion;
        entity.precio = dto.precio;
        entity.kilometraje = dto.kilometraje;
        entity.marca = new Marca_1.Marca();
        entity.marca.id = dto.marca_id;
        return entity;
    }
    findAll() {
        return this.automovilRepository.listarTodosLosAutomoviles();
    }
    findOne(id) {
        return this.automovilRepository.buscarPorId(id);
    }
    async create(automovilDto) {
        try {
            const automovilEntity = this.toAutomovilEntity(automovilDto);
            if (!automovilEntity.marca.id) {
                throw new Error("Marca no especificada en el automovil");
            }
            const marcaExiste = await this.marcaRepository.buscarPorId(automovilEntity.marca.id);
            console.log('Marca: ');
            console.table(marcaExiste);
            if (!marcaExiste) {
                throw new Error("Marca no encontrada");
            }
            automovilEntity.marca.nombre = marcaExiste.nombre;
            return this.automovilRepository.crearAuto(automovilEntity);
        }
        catch (error) {
            console.error(error.message);
            throw error;
        }
    }
    async update(id, automovilDto) {
        try {
            const automovilEntity = this.toAutomovilEntity(automovilDto);
            const existe = await this.automovilRepository.buscarPorId(id);
            if (!existe) {
                throw new Error("Automovil no registrado");
            }
            const marcaExiste = await this.marcaRepository.buscarPorId(automovilEntity.marca.id);
            if (!marcaExiste) {
                throw new Error("Marca no encontrada");
            }
            return this.automovilRepository.editarAuto(id, automovilEntity);
        }
        catch (error) {
            console.error(error.message);
            throw error;
        }
    }
    remove(id) {
        return this.automovilRepository.eliminarAuto(id);
    }
};
exports.AutomovilService = AutomovilService;
exports.AutomovilService = AutomovilService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_1.AutomovilRepository,
        marcaRepository_1.MarcaRepository])
], AutomovilService);
