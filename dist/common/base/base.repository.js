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
exports.BaseRepository = void 0;
const constants_1 = require("../../common/constants");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const commonFunction_1 = require("../helper/commonFunction");
class BaseRepository {
    constructor(model) {
        this.model = model;
        this.logger = new common_1.Logger(this.constructor.name, { timestamp: true });
    }
    async createOne(data, options) {
        try {
            if (options) {
                return (await this.model.create([data], options))?.[0];
            }
            else {
                return this.model.create(data);
            }
        }
        catch (error) {
            this.logger.error(`Error in BaseRepository createOne: ${error}`);
            throw error;
        }
    }
    async softDeleteOne(filter) {
        try {
            return this.model.updateOne(filter, {
                deletedAt: new Date(),
            });
        }
        catch (error) {
            this.logger.error(`Error in BaseRepository softDelete: ${error}`);
            throw error;
        }
    }
    async getOneById(id, attributes) {
        try {
            return this.model.findOne({ _id: new mongoose_2.Types.ObjectId(id), ...constants_1.softDeleteCondition }, (0, commonFunction_1.parseMongoProjection)(attributes));
        }
        catch (error) {
            this.logger.error(`Error in BaseRepository getOneById: ${error}`);
            throw error;
        }
    }
    async updateOneById(id, update) {
        try {
            return this.model.updateOne({ _id: new mongoose_2.Types.ObjectId(id) }, update);
        }
        catch (error) {
            this.logger.error(`Error in BaseRepository updateOneById: ${error}`);
            throw error;
        }
    }
    async findOne(filter) {
        try {
            return this.model.findOne({
                ...filter,
                ...constants_1.softDeleteCondition,
            });
        }
        catch (error) {
            this.logger.error(`Error in BaseRepository findOne: ${error}`);
            throw error;
        }
    }
}
exports.BaseRepository = BaseRepository;
__decorate([
    (0, mongoose_1.InjectConnection)(),
    __metadata("design:type", mongoose_2.default.Connection)
], BaseRepository.prototype, "connection", void 0);
//# sourceMappingURL=base.repository.js.map