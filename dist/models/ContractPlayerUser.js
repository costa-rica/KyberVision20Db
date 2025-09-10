"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractPlayerUser = void 0;
exports.initContractPlayerUser = initContractPlayerUser;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class ContractPlayerUser extends sequelize_1.Model {
}
exports.ContractPlayerUser = ContractPlayerUser;
function initContractPlayerUser() {
    ContractPlayerUser.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        playerId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "contractPlayerUser",
    });
    return ContractPlayerUser;
}
