import { Controller, Post, Body, Get, Query, Req } from '@nestjs/common';
import { LeadService } from './lead.service';
import { UploadLeadsDto } from './dto/upload-leads.dto';
@Controller('v1/leads')
export class LeadController {
constructor(private readonly svc: LeadService) {}
@Post('upload')
async upload(@Req() req: any, @Body() body: UploadLeadsDto) {
 const orgId = body.org_id || req.headers['x-org-id'] || 'default-org';
 const inserted = await this.svc.bulkInsert(orgId, body.leads);
 return { inserted };
}
@Get()
async list(@Req() req: any, @Query('status') status='NEW', @Query('page') page='1', @Query('size') size='50') {
 const orgId = req.headers['x-org-id'] || 'default-org';
 return await this.svc.list(orgId, status, parseInt(page), parseInt(size));
}
}