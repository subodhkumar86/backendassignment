"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("../../ormconfig"));
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: 'DATA_SOURCE',
                useFactory: async () => {
                    const config = {
                        type: 'postgres',
                        host: process.env.DB_HOST || ormconfig_1.default.host,
                        port: parseInt(process.env.DB_PORT || String(ormconfig_1.default.port)),
                        username: process.env.DB_USER || ormconfig_1.default.username,
                        password: process.env.DB_PASS || ormconfig_1.default.password,
                        database: process.env.DB_NAME || ormconfig_1.default.database,
                        synchronize: ormconfig_1.default.synchronize,
                        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                    };
                    return await (0, typeorm_1.createConnection)(config);
                },
            },
        ],
        exports: ['DATA_SOURCE'],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map