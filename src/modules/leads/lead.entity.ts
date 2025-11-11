import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
@Entity('lead')
export class Lead {
@PrimaryGeneratedColumn('uuid') id: string;
@Column() org_id: string;
@Column({ nullable: true }) lead_list_id: string;
@Column() email: string;
@Column({ default: 'NEW' }) status: string;
@Column({ nullable: true }) metadata: string;
@CreateDateColumn() created_at: Date;
}
