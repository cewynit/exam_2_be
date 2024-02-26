"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchemaForClass = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const createSchemaForClass = (classType) => {
    const schema = mongoose_1.SchemaFactory.createForClass(classType);
    return schema;
};
exports.createSchemaForClass = createSchemaForClass;
//# sourceMappingURL=helper.js.map