"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
exports.initUser = initUser;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class User extends sequelize_1.Model {
}
exports.User = User;
function initUser() {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: sequelize_1.DataTypes.STRING,
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        isAdminForKvManagerWebsite: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, { tableName: "users", sequelize: _connection_1.sequelize });
    return User;
}
