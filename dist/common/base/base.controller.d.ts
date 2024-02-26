import { Logger } from '@nestjs/common';
export declare class BaseController {
    logger: Logger;
    handleError(err: any): void;
}
