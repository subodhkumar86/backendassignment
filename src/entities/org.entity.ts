import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('org')
export class Org {
@PrimaryGeneratedColumn('uuid') id: string;
@Column() name: string;
}