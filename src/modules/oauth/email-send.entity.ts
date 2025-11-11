import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
@Entity('email_send')
export class EmailSend {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ nullable: true }) lead_id: string;
  @Column() provider_message_id: string;
  @CreateDateColumn() created_at: Date;
}
