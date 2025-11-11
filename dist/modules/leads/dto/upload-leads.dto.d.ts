declare class LeadItem {
    email: string;
    lead_list_id?: string;
    metadata?: any;
}
export declare class UploadLeadsDto {
    leads: LeadItem[];
    org_id?: string;
}
export {};
