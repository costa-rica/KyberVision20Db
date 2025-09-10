"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendingInvitations = void 0;
exports.initPendingInvitations = initPendingInvitations;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class PendingInvitations extends sequelize_1.Model {
}
exports.PendingInvitations = PendingInvitations;
function initPendingInvitations() {
    PendingInvitations.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        teamId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "pendingInvitations",
    });
    return PendingInvitations;
}
