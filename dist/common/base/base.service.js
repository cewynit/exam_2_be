"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const commonFunction_1 = require("../helper/commonFunction");
class BaseService {
    constructor(repo) {
        this.logger = new common_1.Logger(this.constructor.name, { timestamp: true });
        this.repository = repo;
    }
    async softDeleteById(id) {
        try {
            return this.repository.softDeleteOne({ _id: (0, commonFunction_1.toObjectId)(id) });
        }
        catch (error) {
            this.logger.error(`Error in BaseService softDeleteById: ${error}`);
            throw error;
        }
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map