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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../common/base/base.service");
const user_constant_1 = require("./dto/user.constant");
const user_repository_1 = require("./repository/user.repository");
const cloudinary_service_1 = require("./../cloudinary/cloudinary.service");
let UserService = class UserService extends base_service_1.BaseService {
    constructor(userRepository, cloudinary) {
        super(userRepository);
        this.userRepository = userRepository;
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
    async _createUser(dto) {
        try {
            const user = {
                ...dto,
            };
            const res = await this.userRepository.createOne(user);
            return res;
        }
        catch (error) {
            this.logger.error('Error in userService create user: ' + error);
            throw error;
        }
    }
    async _updateUser(id, dto) {
        try {
            await this.userRepository.updateOneById(id, dto);
            return await this._findUserById(id);
        }
        catch (error) {
            this.logger.error('Error in userService update user: ' + error);
            throw error;
        }
    }
    async _findUserById(id, attributes = user_constant_1.UserAttributesForList) {
        try {
            return await this.userRepository.getOneById(id, attributes);
        }
        catch (error) {
            this.logger.error('Error in UserService findUserById: ' + error);
            throw error;
        }
    }
    async _deleteUser(id) {
        try {
            await this.userRepository.softDeleteOne({ _id: id });
            return { id };
        }
        catch (error) {
            this.logger.error('Error in UserService deleteUser: ' + error);
            throw error;
        }
    }
    async _findAllAndCountUserByQuery(query) {
        try {
            const result = await this.userRepository.findAllAndCountUserByQuery(query);
            return result;
        }
        catch (error) {
            this.logger.error('Error in UserService findAllAndCountUserByQuery: ' + error);
            throw error;
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository, cloudinary_service_1.CloudinaryService])
], UserService);
//# sourceMappingURL=user.service.js.map