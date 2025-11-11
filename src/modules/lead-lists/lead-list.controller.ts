import { Controller, Post, Body, Req } from '@nestjs/common';
import { LeadListService } from './lead-list.service';
@Controller('v1/lead-lists')
export class LeadListController {
constructor(private readonly service: LeadListService) {}
@Post()
async create(@Req() req: any, @Body() body: { name: string; org_id?: string }) {
 const orgId = body.org_id || req.headers['x-org-id'] || 'default-org';
 const saved = await this.service.create(orgId, body.name);
 return { id: saved.id };
}
}
