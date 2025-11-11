export declare class OauthService {
    private dataSource;
    private repo;
    private sendRepo;
    private logger;
    constructor(dataSource: any);
    connectAndSend(orgId: string, provider: string, token: string, leadId?: string): Promise<{
        oauth_id: string;
        provider_message_id: string;
        message: string;
    }>;
}
