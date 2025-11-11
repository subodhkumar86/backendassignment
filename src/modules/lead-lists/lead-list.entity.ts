import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
@Entity('lead_list')
export class LeadList {
@PrimaryGeneratedColumn('uuid') id: string;
@Column() org_id: string;
@Column() name: string;
@CreateDateColumn() created_at: Date;
}
