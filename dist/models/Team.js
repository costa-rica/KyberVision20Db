"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
exports.initTeam = initTeam;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class Team extends sequelize_1.Model {
}
exports.Team = Team;
function initTeam() {
    Team.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        teamName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        coachName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        visibility: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: "Private",
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "teams",
    });
    return Team;
}
