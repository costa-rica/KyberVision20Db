"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractLeagueTeam = void 0;
exports.initContractLeagueTeam = initContractLeagueTeam;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class ContractLeagueTeam extends sequelize_1.Model {
}
exports.ContractLeagueTeam = ContractLeagueTeam;
function initContractLeagueTeam() {
    ContractLeagueTeam.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        leagueId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        teamId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "contractLeagueTeam",
    });
    return ContractLeagueTeam;
}
