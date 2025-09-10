"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractTeamUser = void 0;
exports.initContractTeamUser = initContractTeamUser;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class ContractTeamUser extends sequelize_1.Model {
}
exports.ContractTeamUser = ContractTeamUser;
function initContractTeamUser() {
    ContractTeamUser.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        teamId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        isSuperUser: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isAdmin: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isCoach: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "contractTeamUser",
    });
    return ContractTeamUser;
}
