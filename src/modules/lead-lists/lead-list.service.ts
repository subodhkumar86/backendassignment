import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LeadList } from './lead-list.entity';
@Injectable()
export class LeadListService {
private repo: Repository<LeadList>;
constructor(@Inject('DATA_SOURCE') private dataSource: any) {
 this.repo = this.dataSource.getRepository(LeadList);
}
async create(orgId: string, name: string) {
 const e = this.repo.create({ org_id: orgId, name });
 return await this.repo.save(e);
}
}
