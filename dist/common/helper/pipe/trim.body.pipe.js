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
exports.TrimBodyPipe = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
let TrimBodyPipe = class TrimBodyPipe {
    constructor() {
    }
    trimData(body) {
        const trimValue = (item) => {
            (0, lodash_1.mapKeys)(item, (value, key) => {
                if (typeof value === 'string') {
                    item[key] = (0, lodash_1.trim)(value);
                }
                else if (Array.isArray(value)) {
                    value.forEach((subValue, index) => {
                        if (typeof subValue === 'string') {
                            value[index] = (0, lodash_1.trim)(subValue);
                        }
                        else if ((0, lodash_1.isPlainObject)(subValue)) {
                            trimValue(subValue);
                        }
                    });
                }
                else if ((0, lodash_1.isPlainObject)(value)) {
                    trimValue(value);
                }
            });
        };
        trimValue(body);
    }
    transform(body) {
        this.trimData(body);
        return body;
    }
};
exports.TrimBodyPipe = TrimBodyPipe;
exports.TrimBodyPipe = TrimBodyPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TrimBodyPipe);
//# sourceMappingURL=trim.body.pipe.js.map