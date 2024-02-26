"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const whiteList = '*';
    const corsOptions = {
        origin: whiteList?.split(',')?.length > 1 ? whiteList.split(',') : whiteList,
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Language',
            'X-Timezone',
            'X-Timezone-Name',
            'X-Mssp-Id',
            'X-Organization-Id',
        ],
        optionsSuccessStatus: 200,
        methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    };
    app.enableCors(corsOptions);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map