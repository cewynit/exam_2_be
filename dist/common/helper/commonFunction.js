"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toObjectId = exports.parseMongoProjection = void 0;
const mongoose_1 = require("mongoose");
const parseMongoProjection = (attributeList, opts) => {
    const { prefix, exclude } = opts ?? {};
    let rs = {};
    attributeList.forEach((val) => {
        const path = prefix?.length ? `${prefix}.${val}` : val;
        rs = {
            ...rs,
            [path]: exclude ? 0 : 1,
        };
    });
    return rs;
};
exports.parseMongoProjection = parseMongoProjection;
const toObjectId = (id) => {
    try {
        if (!id) {
            return undefined;
        }
        if (Array.isArray(id)) {
            return id.map((item) => new mongoose_1.Types.ObjectId(item.toString()));
        }
        return new mongoose_1.Types.ObjectId(id.toString());
    }
    catch (error) {
        return undefined;
    }
};
exports.toObjectId = toObjectId;
//# sourceMappingURL=commonFunction.js.map