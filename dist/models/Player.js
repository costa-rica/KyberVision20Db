"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
exports.initPlayer = initPlayer;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class Player extends sequelize_1.Model {
}
exports.Player = Player;
function initPlayer() {
    Player.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        birthDate: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true,
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
            defaultValue: "_playerDefaultRedditAlien.png",
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "players",
    });
    return Player;
}
