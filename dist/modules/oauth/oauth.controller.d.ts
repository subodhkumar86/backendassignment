import { OauthService } from './oauth.service';
export declare class OauthController {
    private readonly svc;
    constructor(svc: OauthService);
    connect(req: any, body: {
        provider: string;
        access_token: string;
        lead_id?: string;
        org_id?: string;
    }): Promise<{
        oauth_id: string;
        provider_message_id: string;
        message: string;
    }>;
}
