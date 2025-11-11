
import { Controller, Post, Body, Req } from '@nestjs/common';
import { OauthService } from './oauth.service';
@Controller('v1/oauth')
export class OauthController {
constructor(private readonly svc: OauthService) {}
@Post('connect')
async connect(@Req() req: any, @Body() body: { provider: string; access_token: string; lead_id?: string; org_id?: string }) {
 const orgId = body.org_id || req.headers['x-org-id'] || 'default-org';
 return await this.svc.connectAndSend(orgId, body.provider, body.access_token, body.lead_id);
}
}
