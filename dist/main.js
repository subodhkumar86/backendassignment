"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const trace_interceptor_1 = require("./common/interceptors/trace.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new trace_interceptor_1.TraceInterceptor());
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`✅ Server started on http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map