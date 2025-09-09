"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractUserAction = void 0;
exports.initContractUserAction = initContractUserAction;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class ContractUserAction extends sequelize_1.Model {
}
exports.ContractUserAction = ContractUserAction;
function initContractUserAction() {
    ContractUserAction.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            // Optional FK metadata (mostly informational in Sequelize; sqlite needs PRAGMA ON):
            // references: { model: "users", key: "id" },
        },
        actionId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            // references: { model: "actions", key: "id" },
        },
        sessionId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            // references: { model: "sessions", key: "id" },
        },
    }, {
        sequelize: _connection_1.sequelize, // <-- required
        tableName: "contractUserAction",
        timestamps: true, // or false, your choice
        indexes: [
            {
                name: "contractUserAction_user_action_unique",
                unique: true,
                fields: ["userId", "actionId"],
            },
        ],
    });
    return ContractUserAction;
}
