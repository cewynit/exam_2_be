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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../common/base/base.service");
const product_repository_1 = require("./repository/product.repository");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const product_contant_1 = require("./dto/product.contant");
let ProductService = class ProductService extends base_service_1.BaseService {
    constructor(productRepository, cloudinary) {
        super(productRepository);
        this.productRepository = productRepository;
        this.cloudinary = cloudinary;
    }
    async uploadImageToCloudinary(file) {
        try {
            if (!file || !file.mimetype.startsWith('image/')) {
                throw new common_1.BadRequestException('Invalid file type. Only images are allowed.');
            }
            const result = await this.cloudinary.uploadImage(file);
            return result.secure_url;
        }
        catch (error) {
            this.logger.error('Failed to upload image to Cloudinary: ' + error);
            throw error;
        }
    }
    async deleteImageByUrl(imageUrl) {
        try {
            const res = await this.cloudinary.deleteImageByUrl(imageUrl);
        }
        catch (error) {
            this.logger.error('Error in delete ImageCloudinary: ' + error);
            throw error;
        }
    }
    async _createProduct(dto) {
        try {
            const product = {
                ...dto,
            };
            const res = await this.productRepository.createOne(product);
            return res;
        }
        catch (error) {
            this.logger.error('Error in productService createproduct: ' + error);
            throw error;
        }
    }
    async _updateProduct(id, dto) {
        try {
            await this.productRepository.updateOneById(id, dto);
            return await this._findProductById(id);
        }
        catch (error) {
            this.logger.error('Error in ProductService updateProduct: ' + error);
            throw error;
        }
    }
    async _findProductById(id, attributes = product_contant_1.ProductAttributesForList) {
        try {
            return await this.productRepository.getOneById(id, attributes);
        }
        catch (error) {
            this.logger.error('Error in ProductService findProductById: ' + error);
            throw error;
        }
    }
    async _deleteProduct(id) {
        try {
            await this.productRepository.softDeleteOne({ _id: id });
            return { id };
        }
        catch (error) {
            this.logger.error('Error in ProductService deleteProduct: ' + error);
            throw error;
        }
    }
    async _findAllAndCountProductByQuery(query) {
        try {
            const result = await this.productRepository.findAllAndCountUserByQuery(query);
            return result;
        }
        catch (error) {
            this.logger.error('Error in ProductService findAllAndCountProductByQuery: ' + error);
            throw error;
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository, cloudinary_service_1.CloudinaryService])
], ProductService);
//# sourceMappingURL=product.service.js.map