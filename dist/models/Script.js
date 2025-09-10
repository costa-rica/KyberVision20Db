"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Script = void 0;
exports.initScript = initScript;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class Script extends sequelize_1.Model {
}
exports.Script = Script;
function initScript() {
    Script.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sessionId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        timestampReferenceFirstAction: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true,
        },
        isScriptingLive: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "scripts",
    });
    return Script;
}
