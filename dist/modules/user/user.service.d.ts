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
import { User } from '../../database/schemas/user.schema';
import { BaseService } from '../../common/base/base.service';
import { GetUserListQuery, UpdateUserDto, createUserDto } from './dto/user.interface';
import { Types } from 'mongoose';
import { UserRepository } from './repository/user.repository';
import { CloudinaryService } from './../cloudinary/cloudinary.service';
export declare class UserService extends BaseService<User, UserRepository> {
    private readonly userRepository;
    private readonly cloudinary;
    constructor(userRepository: UserRepository, cloudinary: CloudinaryService);
    uploadImageToCloudinary(file: Express.Multer.File): Promise<string>;
    deleteImageByUrl(imageUrl: string): Promise<void>;
    _createUser(dto: createUserDto): Promise<import("mongoose").Document<unknown, {}, SchemaDocument<User>> & import("mongoose").Document<Types.ObjectId, any, User> & User & Required<{
        _id: Types.ObjectId;
    }>>;
    _updateUser(id: Types.ObjectId, dto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, SchemaDocument<User>> & import("mongoose").Document<Types.ObjectId, any, User> & User & Required<{
        _id: Types.ObjectId;
    }>>;
    _findUserById(id: Types.ObjectId, attributes?: (keyof User)[]): Promise<import("mongoose").Document<unknown, {}, SchemaDocument<User>> & import("mongoose").Document<Types.ObjectId, any, User> & User & Required<{
        _id: Types.ObjectId;
    }>>;
    _deleteUser(id: Types.ObjectId): Promise<{
        id: Types.ObjectId;
    }>;
    _findAllAndCountUserByQuery(query: GetUserListQuery): Promise<{
        totalItems: any;
        items: any;
    }>;
}
