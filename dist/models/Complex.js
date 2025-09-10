"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complex = void 0;
exports.initComplex = initComplex;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class Complex extends sequelize_1.Model {
}
exports.Complex = Complex;
function initComplex() {
    Complex.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^K.+/,
            },
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "complexes",
    });
    return Complex;
}
