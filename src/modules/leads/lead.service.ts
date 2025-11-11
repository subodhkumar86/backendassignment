import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Lead } from './lead.entity';
@Injectable()
export class LeadService {
private repo: Repository<Lead>;
constructor(@Inject('DATA_SOURCE') private dataSource: any) {
 this.repo = this.dataSource.getRepository(Lead);
}
async bulkInsert(orgId: string, leads: any[]) {
 const data = leads.map(l => this.repo.create({ org_id: orgId, email: l.email, lead_list_id: l.lead_list_id, metadata: l.metadata ? JSON.stringify(l.metadata) : null }));
 const saved = await this.repo.save(data);
 return saved.length;
}
async list(orgId: string, status = 'NEW', page = 1, size = 50) {
 const qb = this.repo.createQueryBuilder('lead').where('lead.org_id = :orgId', { orgId });
 if (status) qb.andWhere('lead.status = :status', { status });
 const [rows, total] = await qb.skip((page - 1) * size).take(size).getManyAndCount();
 return { total, page, size, items: rows };
}
}
