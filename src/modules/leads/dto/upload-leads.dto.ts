import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';
class LeadItem {
@IsEmail() email: string;
@IsOptional() @IsString() lead_list_id?: string;
@IsOptional() metadata?: any;
}
export class UploadLeadsDto {
@IsArray() leads: LeadItem[];
@IsOptional() org_id?: string;
}