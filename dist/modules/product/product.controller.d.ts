/// <reference types="multer" />
import { ProductService } from './product.service';
import { BaseController } from 'src/common/base/base.controller';
import { GetProductListQuery, createProductDto, updateProductDto } from './dto/product.interface';
import { ErrorResponse, SuccessResponse } from 'src/common/helper/response';
export declare class ProductController extends BaseController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProduct(query: GetProductListQuery): Promise<{
        totalItems: any;
        items: any;
    }>;
    createProduct(dto: createProductDto, file: Express.Multer.File): Promise<SuccessResponse>;
    updateProduct(id: string, dto: updateProductDto, file: Express.Multer.File): Promise<SuccessResponse | ErrorResponse>;
    getProductById(id: string): Promise<SuccessResponse | ErrorResponse>;
    deleteProduct(id: string): Promise<SuccessResponse | ErrorResponse>;
}
