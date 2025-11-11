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
exports.OauthController = void 0;
const common_1 = require("@nestjs/common");
const oauth_service_1 = require("./oauth.service");
let OauthController = class OauthController {
    constructor(svc) {
        this.svc = svc;
    }
    async connect(req, body) {
        const orgId = body.org_id || req.headers['x-org-id'] || 'default-org';
        return await this.svc.connectAndSend(orgId, body.provider, body.access_token, body.lead_id);
    }
};
exports.OauthController = OauthController;
__decorate([
    (0, common_1.Post)('connect'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OauthController.prototype, "connect", null);
exports.OauthController = OauthController = __decorate([
    (0, common_1.Controller)('v1/oauth'),
    __metadata("design:paramtypes", [oauth_service_1.OauthService])
], OauthController);
//# sourceMappingURL=oauth.controller.js.map