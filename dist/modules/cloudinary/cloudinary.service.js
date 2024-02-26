"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const stream_1 = require("stream");
let CloudinaryService = class CloudinaryService {
    async uploadImage(file) {
        if (!file) {
            throw new common_1.BadRequestException('Invalid file type. Only images are allowed.');
        }
        try {
            return await new Promise((resolve, reject) => {
                const upload = cloudinary_1.v2.uploader.upload_stream((error, result) => {
                    if (error) {
                        reject(new common_1.BadRequestException('Failed to upload image to Cloudinary.'));
                        return;
                    }
                    resolve(result);
                });
                const bufferStream = stream_1.Readable.from(file.buffer);
                bufferStream.pipe(upload);
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to upload image to Cloudinary.');
        }
    }
    async deleteImageByUrl(imageUrl) {
        try {
            const publicIdMatch = imageUrl.split('/').pop();
            const publicId = publicIdMatch ? publicIdMatch.split('.')[0] : null;
            if (!publicId) {
                throw new common_1.BadRequestException('Invalid Cloudinary image URL.');
            }
            const result = await cloudinary_1.v2.uploader.destroy(publicId);
            if (result.result !== 'ok') {
                throw new common_1.BadRequestException('Failed to delete image from Cloudinary.');
            }
            console.log('Image deleted successfully.');
            return true;
        }
        catch (error) {
            console.error('Error deleting image from Cloudinary:', error);
            return false;
        }
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = __decorate([
    (0, common_1.Injectable)()
], CloudinaryService);
//# sourceMappingURL=cloudinary.service.js.map