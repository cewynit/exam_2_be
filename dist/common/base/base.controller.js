"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const common_1 = require("@nestjs/common");
class BaseController {
    constructor() {
        this.logger = new common_1.Logger(this.constructor.name, { timestamp: true });
    }
    handleError(err) {
        if (err && err instanceof common_1.HttpException) {
            throw err;
        }
        throw new common_1.InternalServerErrorException(err);
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map