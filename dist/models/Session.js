"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
exports.initSession = initSession;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class Session extends sequelize_1.Model {
}
exports.Session = Session;
function initSession() {
    Session.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        contractLeagueTeamId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        teamId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        sessionDate: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        city: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        sessionName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "sessions",
    });
    return Session;
}
