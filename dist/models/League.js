"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.League = void 0;
exports.initLeague = initLeague;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class League extends sequelize_1.Model {
}
exports.League = League;
function initLeague() {
    League.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "leagues",
    });
    return League;
}
