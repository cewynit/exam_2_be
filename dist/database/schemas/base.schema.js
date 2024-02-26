"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoBaseSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
class MongoBaseSchema {
}
exports.MongoBaseSchema = MongoBaseSchema;
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: null, type: Date }),
    __metadata("design:type", Date)
], MongoBaseSchema.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: null, type: Date }),
    __metadata("design:type", Date)
], MongoBaseSchema.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: null, type: Date }),
    __metadata("design:type", Date)
], MongoBaseSchema.prototype, "deletedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        default: null,
        type: mongoose_2.SchemaTypes.ObjectId,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], MongoBaseSchema.prototype, "deletedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        default: null,
        type: mongoose_2.SchemaTypes.ObjectId,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], MongoBaseSchema.prototype, "updatedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: null, type: mongoose_2.SchemaTypes.ObjectId }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], MongoBaseSchema.prototype, "createdBy", void 0);
//# sourceMappingURL=base.schema.js.map