"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
const constants_1 = require("./constants");
exports.CloudinaryProvider = {
    provide: constants_1.CLOUDINARY,
    useFactory: () => {
        return cloudinary_1.v2.config({
            cloud_name: 'drhdgw1xx',
            api_key: '293913884755846',
            api_secret: 'mwsfqSn7nZLk5HeEDMmjV8d0GB4',
        });
    },
};
//# sourceMappingURL=cloudinary.provider.js.map