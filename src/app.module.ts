import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './modules/health/health.module';
import { LeadListsModule } from './modules/lead-lists/lead-list.module';
import { LeadsModule } from './modules/leads/lead.module';
import { OauthModule } from './modules/oauth/oauth.module';
import { EmailModule } from './modules/email/email.module';

@Module({
imports: [
 ConfigModule.forRoot({ isGlobal: true }),
 DatabaseModule,
 HealthModule,
 LeadListsModule,
 LeadsModule,
 OauthModule,
 EmailModule,
]
})
export class AppModule {}
