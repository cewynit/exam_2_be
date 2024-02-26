/// <reference types="multer" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { BaseService } from 'src/common/base/base.service';
import { Product } from 'src/database/schemas/product.schema';
import { ProductRepository } from './repository/product.repository';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { GetProductListQuery, createProductDto, updateProductDto } from './dto/product.interface';
import { Types } from 'mongoose';
export declare class ProductService extends BaseService<Product, ProductRepository> {
    private readonly productRepository;
    private readonly cloudinary;
    constructor(productRepository: ProductRepository, cloudinary: CloudinaryService);
    uploadImageToCloudinary(file: Express.Multer.File): Promise<string>;
    deleteImageByUrl(imageUrl: string): Promise<void>;
    _createProduct(dto: createProductDto): Promise<import("mongoose").Document<unknown, {}, SchemaDocument<Product>> & import("mongoose").Document<Types.ObjectId, any, Product> & Product & Required<{
        _id: Types.ObjectId;
    }>>;
    _updateProduct(id: Types.ObjectId, dto: updateProductDto): Promise<import("mongoose").Document<unknown, {}, SchemaDocument<Product>> & import("mongoose").Document<Types.ObjectId, any, Product> & Product & Required<{
        _id: Types.ObjectId;
    }>>;
    _findProductById(id: Types.ObjectId, attributes?: (keyof Product)[]): Promise<import("mongoose").Document<unknown, {}, SchemaDocument<Product>> & import("mongoose").Document<Types.ObjectId, any, Product> & Product & Required<{
        _id: Types.ObjectId;
    }>>;
    _deleteProduct(id: Types.ObjectId): Promise<{
        id: Types.ObjectId;
    }>;
    _findAllAndCountProductByQuery(query: GetProductListQuery): Promise<{
        totalItems: any;
        items: any;
    }>;
}
