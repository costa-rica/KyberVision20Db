"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractTeamPlayer = void 0;
exports.initContractTeamPlayer = initContractTeamPlayer;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class ContractTeamPlayer extends sequelize_1.Model {
}
exports.ContractTeamPlayer = ContractTeamPlayer;
function initContractTeamPlayer() {
    ContractTeamPlayer.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        playerId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        teamId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        shirtNumber: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        position: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        positionAbbreviation: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "contractTeamPlayer",
    });
    return ContractTeamPlayer;
}
