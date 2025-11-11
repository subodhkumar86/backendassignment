import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TraceInterceptor } from './common/interceptors/trace.interceptor';

async function bootstrap() {
const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
app.useGlobalFilters(new HttpExceptionFilter());
app.useGlobalInterceptors(new TraceInterceptor());
const port = process.env.PORT || 3000;
await app.listen(port);
console.log(`✅ Server started on http://localhost:${port}`);
}
bootstrap();
