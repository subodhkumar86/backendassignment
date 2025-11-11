import { Lead } from './lead.entity';
export declare class LeadService {
    private dataSource;
    private repo;
    constructor(dataSource: any);
    bulkInsert(orgId: string, leads: any[]): Promise<number>;
    list(orgId: string, status?: string, page?: number, size?: number): Promise<{
        total: number;
        page: number;
        size: number;
        items: Lead[];
    }>;
}
