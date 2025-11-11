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
exports.LeadController = void 0;
const common_1 = require("@nestjs/common");
const lead_service_1 = require("./lead.service");
const upload_leads_dto_1 = require("./dto/upload-leads.dto");
let LeadController = class LeadController {
    constructor(svc) {
        this.svc = svc;
    }
    async upload(req, body) {
        const orgId = body.org_id || req.headers['x-org-id'] || 'default-org';
        const inserted = await this.svc.bulkInsert(orgId, body.leads);
        return { inserted };
    }
    async list(req, status = 'NEW', page = '1', size = '50') {
        const orgId = req.headers['x-org-id'] || 'default-org';
        return await this.svc.list(orgId, status, parseInt(page), parseInt(size));
    }
};
exports.LeadController = LeadController;
__decorate([
    (0, common_1.Post)('upload'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, upload_leads_dto_1.UploadLeadsDto]),
    __metadata("design:returntype", Promise)
], LeadController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('size')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], LeadController.prototype, "list", null);
exports.LeadController = LeadController = __decorate([
    (0, common_1.Controller)('v1/leads'),
    __metadata("design:paramtypes", [lead_service_1.LeadService])
], LeadController);
//# sourceMappingURL=lead.controller.js.map