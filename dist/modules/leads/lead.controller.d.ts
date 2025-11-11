import { LeadService } from './lead.service';
import { UploadLeadsDto } from './dto/upload-leads.dto';
export declare class LeadController {
    private readonly svc;
    constructor(svc: LeadService);
    upload(req: any, body: UploadLeadsDto): Promise<{
        inserted: number;
    }>;
    list(req: any, status?: string, page?: string, size?: string): Promise<{
        total: number;
        page: number;
        size: number;
        items: import("./lead.entity").Lead[];
    }>;
}
