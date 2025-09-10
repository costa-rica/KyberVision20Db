"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractVideoAction = void 0;
exports.initContractVideoAction = initContractVideoAction;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class ContractVideoAction extends sequelize_1.Model {
}
exports.ContractVideoAction = ContractVideoAction;
function initContractVideoAction() {
    ContractVideoAction.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        actionId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        videoId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        deltaTimeInSeconds: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0.0,
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "contractVideoAction",
    });
    return ContractVideoAction;
}
