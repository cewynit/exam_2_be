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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const base_controller_1 = require("../../common/base/base.controller");
const product_interface_1 = require("./dto/product.interface");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const trim_body_pipe_1 = require("../../common/helper/pipe/trim.body.pipe");
const response_1 = require("../../common/helper/response");
const commonFunction_1 = require("../../common/helper/commonFunction");
const constants_1 = require("../../common/constants");
let ProductController = class ProductController extends base_controller_1.BaseController {
    constructor(productService) {
        super();
        this.productService = productService;
    }
    async getAllProduct(query) {
        return await this.productService._findAllAndCountProductByQuery(query);
    }
    async createProduct(dto, file) {
        try {
            file != null ? dto.image = await this.productService.uploadImageToCloudinary(file) : dto.image = '';
            const result = await this.productService._createProduct(dto);
            return new response_1.SuccessResponse(result);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async updateProduct(id, dto, file) {
        try {
            const product = await this.productService._findProductById((0, commonFunction_1.toObjectId)(id));
            if (!product) {
                return new response_1.ErrorResponse(constants_1.HttpStatus.ITEM_NOT_FOUND, "Product not found");
            }
            if (file != null) {
                if (product.image !== '') {
                    this.productService.deleteImageByUrl(product.image);
                }
            }
            file != null ? dto.image = await this.productService.uploadImageToCloudinary(file) : dto.image = product.image;
            const result = await this.productService._updateProduct((0, commonFunction_1.toObjectId)(id), dto);
            if (result)
                return new response_1.SuccessResponse(result);
            throw new common_1.HttpException("Update error", constants_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async getProductById(id) {
        try {
            const result = await this.productService._findProductById((0, commonFunction_1.toObjectId)(id));
            if (!result) {
                return new response_1.ErrorResponse(constants_1.HttpStatus.ITEM_NOT_FOUND, "Product not found");
            }
            return new response_1.SuccessResponse(result);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async deleteProduct(id) {
        try {
            const product = await this.productService._findProductById((0, commonFunction_1.toObjectId)(id));
            if (!product) {
                return new response_1.ErrorResponse(constants_1.HttpStatus.NOT_FOUND, "Product not found");
            }
            if (product.image !== '') {
                this.productService.deleteImageByUrl(product.image);
            }
            const result = await this.productService._deleteProduct((0, commonFunction_1.toObjectId)(id));
            return new response_1.SuccessResponse(result);
        }
        catch (error) {
            this.handleError(error);
        }
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_interface_1.GetProductListQuery]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Product' }),
    (0, swagger_1.ApiBody)({ type: product_interface_1.createProductDto }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)(new trim_body_pipe_1.TrimBodyPipe())),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_interface_1.createProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update Product' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new trim_body_pipe_1.TrimBodyPipe())),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_interface_1.updateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map