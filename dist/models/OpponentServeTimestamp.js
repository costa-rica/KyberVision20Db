"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentServeTimestamp = void 0;
exports.initOpponentServeTimestamp = initOpponentServeTimestamp;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class OpponentServeTimestamp extends sequelize_1.Model {
}
exports.OpponentServeTimestamp = OpponentServeTimestamp;
function initOpponentServeTimestamp() {
    OpponentServeTimestamp.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        actionId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        timestampServiceOpp: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        serveType: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "opponentServeTimestamps",
    });
    return OpponentServeTimestamp;
}
