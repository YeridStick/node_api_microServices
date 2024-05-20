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
exports.AutomovilController = void 0;
const common_1 = require("@nestjs/common");
const automovil_service_1 = require("../../core/services/automovil.service");
const AutoDTO_1 = require("../../core/DTO/AutoDTO");
let AutomovilController = class AutomovilController {
    constructor(automovilService) {
        this.automovilService = automovilService;
    }
    findAll() {
        return this.automovilService.findAll();
    }
    findOne(id) {
        return this.automovilService.findOne(id);
    }
    create(automovil) {
        return this.automovilService.create(automovil);
    }
    update(id, automovil) {
        return this.automovilService.update(id, automovil);
    }
    remove(id) {
        return this.automovilService.remove(id);
    }
};
exports.AutomovilController = AutomovilController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AutomovilController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AutomovilController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AutoDTO_1.AutomovilDto]),
    __metadata("design:returntype", Promise)
], AutomovilController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AutoDTO_1.AutomovilDto]),
    __metadata("design:returntype", Promise)
], AutomovilController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AutomovilController.prototype, "remove", null);
exports.AutomovilController = AutomovilController = __decorate([
    (0, common_1.Controller)('automoviles'),
    __metadata("design:paramtypes", [automovil_service_1.AutomovilService])
], AutomovilController);
