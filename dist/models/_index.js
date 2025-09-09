"use strict";
// import { sequelize } from "./_connection";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractUserAction = exports.User = exports.sequelize = void 0;
exports.initModels = initModels;
// // init each model
// import { initUser, User } from "./User";
// import { initContractUserAction, ContractUserAction } from "./ContractUserAction";
// // ...repeat for all models
// import { applyAssociations } from "./_associations";
// export function initModels() {
//   initUser();
//   initContractUserAction();
//   // ...init others
//   applyAssociations();
//   return {
//     sequelize,
//     User,
//     ContractUserAction,
//     // ...export the rest
//   };
// }
// src/models/_index.ts
const _connection_1 = require("./_connection");
Object.defineProperty(exports, "sequelize", { enumerable: true, get: function () { return _connection_1.sequelize; } });
const User_1 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
const ContractUserAction_1 = require("./ContractUserAction");
Object.defineProperty(exports, "ContractUserAction", { enumerable: true, get: function () { return ContractUserAction_1.ContractUserAction; } });
const _associations_1 = require("./_associations");
/** Initialize all models and associations once per process. */
function initModels() {
    (0, User_1.initUser)();
    (0, ContractUserAction_1.initContractUserAction)();
    (0, _associations_1.applyAssociations)();
    return {
        sequelize: _connection_1.sequelize,
        User: User_1.User,
        ContractUserAction: ContractUserAction_1.ContractUserAction,
    };
}
