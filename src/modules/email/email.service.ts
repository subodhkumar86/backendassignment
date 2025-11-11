import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class EmailService {
private logger = new Logger(EmailService.name);
async sendMock(token: string, payload: any) {
 const url = process.env.EMAIL_MOCK_URL || 'http://localhost:4010';
 try {
   const res = await axios.post(url + '/send', payload, { headers: { Authorization: 'Bearer ' + token } });
   return res.data;
 } catch (e) {
   this.logger.error(e.message);
   throw e;
 }
}
}
