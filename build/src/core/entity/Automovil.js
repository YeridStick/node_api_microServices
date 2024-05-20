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
exports.Automovil = void 0;
const typeorm_1 = require("typeorm");
const Marca_1 = require("./Marca");
let Automovil = class Automovil {
};
exports.Automovil = Automovil;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Automovil.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: false,
        length: 30,
    }),
    __metadata("design:type", String)
], Automovil.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: false,
    }),
    __metadata("design:type", String)
], Automovil.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: false,
    }),
    __metadata("design:type", Number)
], Automovil.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int",
        nullable: false,
    }),
    __metadata("design:type", Number)
], Automovil.prototype, "kilometraje", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Marca_1.Marca, marca => marca.id),
    (0, typeorm_1.JoinColumn)({ name: "marca_id" }),
    __metadata("design:type", Marca_1.Marca)
], Automovil.prototype, "marca", void 0);
exports.Automovil = Automovil = __decorate([
    (0, typeorm_1.Entity)()
], Automovil);
