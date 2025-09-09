"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyAssociations = applyAssociations;
const User_1 = require("./User");
const ContractUserAction_1 = require("./ContractUserAction");
function applyAssociations() {
    User_1.User.hasMany(ContractUserAction_1.ContractUserAction, { foreignKey: "userId", onDelete: "CASCADE" });
    ContractUserAction_1.ContractUserAction.belongsTo(User_1.User, { foreignKey: "userId" });
}
