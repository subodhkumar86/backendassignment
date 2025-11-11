import { LeadListService } from './lead-list.service';
export declare class LeadListController {
    private readonly service;
    constructor(service: LeadListService);
    create(req: any, body: {
        name: string;
        org_id?: string;
    }): Promise<{
        id: string;
    }>;
}
