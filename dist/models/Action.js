"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
exports.initAction = initAction;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class Action extends sequelize_1.Model {
}
exports.Action = Action;
function initAction() {
    Action.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        complexId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        pointId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        scriptId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        playerId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        subtype: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        quality: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        zone: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        setNumber: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            },
        },
        scoreTeamAnalyzed: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        scoreTeamOther: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        rotation: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "actions",
        indexes: [
            {
                unique: true,
                fields: ["timestamp", "scriptId"],
            },
        ],
    });
    return Action;
}
