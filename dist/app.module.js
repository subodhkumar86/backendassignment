"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./database/database.module");
const health_module_1 = require("./modules/health/health.module");
const lead_list_module_1 = require("./modules/lead-lists/lead-list.module");
const lead_module_1 = require("./modules/leads/lead.module");
const oauth_module_1 = require("./modules/oauth/oauth.module");
const email_module_1 = require("./modules/email/email.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            database_module_1.DatabaseModule,
            health_module_1.HealthModule,
            lead_list_module_1.LeadListsModule,
            lead_module_1.LeadsModule,
            oauth_module_1.OauthModule,
            email_module_1.EmailModule,
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map