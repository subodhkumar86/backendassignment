import { Module } from '@nestjs/common';
import { LeadListController } from './lead-list.controller';
import { LeadListService } from './lead-list.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LeadListController],
  providers: [LeadListService],
  exports: [LeadListService],
})
export class LeadListsModule {}
