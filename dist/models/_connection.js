"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const path_1 = __importDefault(require("path"));
const PATH_DATABASE = process.env.PATH_DATABASE;
const NAME_DB = process.env.NAME_DB;
if (!PATH_DATABASE || !NAME_DB) {
    // Fail fast so consumers don’t get cryptic sqlite errors
    throw new Error("Missing PATH_DATABASE or NAME_DB in environment.");
}
exports.sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: path_1.default.join(PATH_DATABASE, NAME_DB),
    logging: false,
});
