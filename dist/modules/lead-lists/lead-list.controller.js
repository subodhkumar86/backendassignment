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
exports.LeadListController = void 0;
const common_1 = require("@nestjs/common");
const lead_list_service_1 = require("./lead-list.service");
let LeadListController = class LeadListController {
    constructor(service) {
        this.service = service;
    }
    async create(req, body) {
        const orgId = body.org_id || req.headers['x-org-id'] || 'default-org';
        const saved = await this.service.create(orgId, body.name);
        return { id: saved.id };
    }
};
exports.LeadListController = LeadListController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LeadListController.prototype, "create", null);
exports.LeadListController = LeadListController = __decorate([
    (0, common_1.Controller)('v1/lead-lists'),
    __metadata("design:paramtypes", [lead_list_service_1.LeadListService])
], LeadListController);
//# sourceMappingURL=lead-list.controller.js.map