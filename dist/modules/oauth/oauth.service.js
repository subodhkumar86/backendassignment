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
var OauthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OauthService = void 0;
const common_1 = require("@nestjs/common");
const oauth_conn_entity_1 = require("./oauth-conn.entity");
const email_send_entity_1 = require("../email/email-send.entity");
let OauthService = OauthService_1 = class OauthService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.logger = new common_1.Logger(OauthService_1.name);
        this.repo = this.dataSource.getRepository(oauth_conn_entity_1.OauthConn);
        this.sendRepo = this.dataSource.getRepository(email_send_entity_1.EmailSend);
    }
    async connectAndSend(orgId, provider, token, leadId) {
        const rec = await this.repo.save(this.repo.create({ org_id: orgId, provider, access_token: token }));
        const fakeMsgId = `mock_${Date.now()}`;
        await this.sendRepo.save(this.sendRepo.create({
            lead_id: leadId || null,
            provider_message_id: fakeMsgId,
        }));
        this.logger.log(`Simulated OAuth email send success for org:${orgId}, provider:${provider}`);
        return {
            oauth_id: rec.id,
            provider_message_id: fakeMsgId,
            message: 'OAuth connected successfully (simulated email send)',
        };
    }
};
exports.OauthService = OauthService;
exports.OauthService = OauthService = OauthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATA_SOURCE')),
    __metadata("design:paramtypes", [Object])
], OauthService);
//# sourceMappingURL=oauth.service.js.map