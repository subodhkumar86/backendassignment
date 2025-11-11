import { Injectable, Inject, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OauthConn } from './oauth-conn.entity';
import { EmailSend } from '../email/email-send.entity';

@Injectable()
export class OauthService {
  private repo: Repository<OauthConn>;
  private sendRepo: Repository<EmailSend>;
  private logger = new Logger(OauthService.name);

  constructor(@Inject('DATA_SOURCE') private dataSource: any) {
    this.repo = this.dataSource.getRepository(OauthConn);
    this.sendRepo = this.dataSource.getRepository(EmailSend);
  }

  async connectAndSend(
    orgId: string,
    provider: string,
    token: string,
    leadId?: string,
  ) {
    // 1️⃣ Save OAuth connection
    const rec = await this.repo.save(
      this.repo.create({ org_id: orgId, provider, access_token: token }),
    );

    // 2️⃣ Simulate a successful email send
    const fakeMsgId = `mock_${Date.now()}`;
    await this.sendRepo.save(
      this.sendRepo.create({
        lead_id: leadId || null,
        provider_message_id: fakeMsgId,
      }),
    );

    // 3️⃣ Log for clarity
    this.logger.log(
      `Simulated OAuth email send success for org:${orgId}, provider:${provider}`,
    );

    // 4️⃣ Always return a clean success JSON
    return {
      oauth_id: rec.id,
      provider_message_id: fakeMsgId,
      message: 'OAuth connected successfully (simulated email send)',
    };
  }
}
