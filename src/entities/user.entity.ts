import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('user')
export class User {
@PrimaryGeneratedColumn('uuid') id: string;
@Column() org_id: string;
@Column() email: string;
@Column({ nullable: true }) name: string;
}
