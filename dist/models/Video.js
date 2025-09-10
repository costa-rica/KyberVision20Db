"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
exports.initVideo = initVideo;
const sequelize_1 = require("sequelize");
const _connection_1 = require("./_connection");
class Video extends sequelize_1.Model {
}
exports.Video = Video;
function initVideo() {
    Video.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sessionId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        contractTeamUserId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        filename: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        url: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        videoFileCreatedDateTimeEstimate: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true,
        },
        videoFileSizeInMb: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: true,
        },
        pathToVideoFile: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        processingCompleted: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
        processingFailed: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
        youTubeVideoId: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        originalVideoFilename: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize: _connection_1.sequelize,
        tableName: "videos",
    });
    return Video;
}
