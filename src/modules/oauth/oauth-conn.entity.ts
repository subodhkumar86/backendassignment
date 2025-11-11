import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
@Entity('oauth_conn')
export class OauthConn {
@PrimaryGeneratedColumn('uuid') id: string;
@Column() org_id: string;
@Column() provider: string;
@Column({ type: 'text' }) access_token: string;
@Column({ nullable: true }) refresh_token: string;
@CreateDateColumn() created_at: Date;
}
