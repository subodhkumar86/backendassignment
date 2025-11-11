import { LeadList } from './lead-list.entity';
export declare class LeadListService {
    private dataSource;
    private repo;
    constructor(dataSource: any);
    create(orgId: string, name: string): Promise<LeadList>;
}
