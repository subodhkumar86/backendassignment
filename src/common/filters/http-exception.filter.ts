import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
catch(exception: unknown, host: ArgumentsHost) {
 const ctx = host.switchToHttp();
 const res = ctx.getResponse();
 const req = ctx.getRequest();
 const traceId = req?.trace_id || req?.headers?.['x-trace-id'] || null;

 let status = HttpStatus.INTERNAL_SERVER_ERROR;
 let message = 'Internal server error';
 let code = 'INTERNAL_ERROR';

 if (exception instanceof HttpException) {
   status = exception.getStatus();
   const response = exception.getResponse();
   message = (response as any).message || response || exception.message;
   code = (response as any).code || 'ERROR';
 } else if (exception instanceof Error) {
   message = exception.message;
 }

 res.status(status).json({ code, message, trace_id: traceId });
}
}
