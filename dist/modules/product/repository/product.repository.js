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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const base_repository_1 = require("../../../common/base/base.repository");
const constants_1 = require("../../../common/constants");
const commonFunction_1 = require("../../../common/helper/commonFunction");
const product_schema_1 = require("../../../database/schemas/product.schema");
const product_contant_1 = require("../dto/product.contant");
let ProductRepository = class ProductRepository extends base_repository_1.BaseRepository {
    constructor(ProductModel) {
        super(ProductModel);
        this.ProductModel = ProductModel;
    }
    async findAllAndCountUserByQuery(query) {
        try {
            const { keyword = '', page = +constants_1.DEFAULT_FIRST_PAGE, limit = +constants_1.DEFAULT_LIMIT_FOR_PAGINATION, orderBy = constants_1.DEFAULT_ORDER_BY, orderDirection = constants_1.DEFAULT_ORDER_DIRECTION, } = query;
            const matchQuery = {};
            matchQuery.$and = [
                {
                    ...constants_1.softDeleteCondition,
                },
            ];
            if (keyword) {
                matchQuery.$and.push({
                    name: { $regex: `.*${keyword}.*`, $options: 'i' },
                });
            }
            const [result] = await this.ProductModel.aggregate([
                {
                    $addFields: {
                        id: { $toString: '$_id' },
                    },
                },
                {
                    $match: {
                        ...matchQuery,
                    },
                },
                {
                    $project: (0, commonFunction_1.parseMongoProjection)(product_contant_1.ProductAttributesForList),
                },
                {
                    $facet: {
                        count: [{ $count: 'total' }],
                        data: [
                            {
                                $sort: {
                                    [orderBy]: orderDirection === constants_1.OrderDirection.ASC
                                        ? 1
                                        : -1,
                                    ['_id']: orderDirection === constants_1.OrderDirection.ASC
                                        ? 1
                                        : -1,
                                },
                            },
                            {
                                $skip: (page - 1) * limit,
                            },
                            {
                                $limit: Number(limit),
                            },
                        ],
                    },
                },
            ]);
            return {
                totalItems: result?.count?.[0]?.total || 0,
                items: result?.data || [],
            };
        }
        catch (error) {
            this.logger.error('Error in ProductRepository findAllAndCountProductByQuery: ' + error);
            throw error;
        }
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductRepository);
//# sourceMappingURL=product.repository.js.map