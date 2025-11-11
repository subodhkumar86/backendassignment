import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';

@Injectable()
export class TraceInterceptor implements NestInterceptor {
intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
 const traceId = uuidv4();
 const req = context.switchToHttp().getRequest();
 req.trace_id = traceId;
 context.switchToHttp().getResponse().setHeader('x-trace-id', traceId);
 return next.handle();
}
}
