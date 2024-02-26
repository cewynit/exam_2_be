"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCollection = exports.MongoCollection = void 0;
var MongoCollection;
(function (MongoCollection) {
    MongoCollection["USERS"] = "users";
    MongoCollection["PRODUCT"] = "prouducts";
})(MongoCollection || (exports.MongoCollection = MongoCollection = {}));
var RoleCollection;
(function (RoleCollection) {
    RoleCollection["USERS"] = "User";
    RoleCollection["Admin"] = "Admin";
})(RoleCollection || (exports.RoleCollection = RoleCollection = {}));
//# sourceMappingURL=constants.js.map