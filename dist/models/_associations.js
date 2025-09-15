"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyAssociations = applyAssociations;
const User_1 = require("./User");
const ContractUserAction_1 = require("./ContractUserAction");
const Action_1 = require("./Action");
const League_1 = require("./League");
const Team_1 = require("./Team");
const Player_1 = require("./Player");
const Session_1 = require("./Session");
const Video_1 = require("./Video");
const Script_1 = require("./Script");
const ContractTeamPlayer_1 = require("./ContractTeamPlayer");
const ContractVideoAction_1 = require("./ContractVideoAction");
const ContractTeamUser_1 = require("./ContractTeamUser");
const ContractLeagueTeam_1 = require("./ContractLeagueTeam");
const ContractPlayerUser_1 = require("./ContractPlayerUser");
function applyAssociations() {
    // Action & User Associations (0-N)
    Action_1.Action.hasMany(ContractUserAction_1.ContractUserAction, {
        foreignKey: "actionId",
        onDelete: "CASCADE",
    });
    ContractUserAction_1.ContractUserAction.belongsTo(Action_1.Action, { foreignKey: "actionId" });
    // User & Action Associations (0-N)
    User_1.User.hasMany(ContractUserAction_1.ContractUserAction, {
        foreignKey: "userId",
        onDelete: "CASCADE",
    });
    ContractUserAction_1.ContractUserAction.belongsTo(User_1.User, { foreignKey: "userId" });
    // Action & Video Associations (0-N)
    Action_1.Action.hasMany(ContractVideoAction_1.ContractVideoAction, {
        foreignKey: "actionId",
        onDelete: "CASCADE",
    });
    ContractVideoAction_1.ContractVideoAction.belongsTo(Action_1.Action, { foreignKey: "actionId" });
    // Video & Action Associations (0-N)
    Video_1.Video.hasMany(ContractVideoAction_1.ContractVideoAction, {
        foreignKey: "videoId",
        onDelete: "CASCADE",
    });
    ContractVideoAction_1.ContractVideoAction.belongsTo(Video_1.Video, { foreignKey: "videoId" });
    // Player & Team Associations
    Player_1.Player.hasMany(ContractTeamPlayer_1.ContractTeamPlayer, {
        foreignKey: "playerId",
        onDelete: "CASCADE",
    });
    Team_1.Team.hasMany(ContractTeamPlayer_1.ContractTeamPlayer, {
        foreignKey: "teamId",
        onDelete: "CASCADE",
    });
    ContractTeamPlayer_1.ContractTeamPlayer.belongsTo(Player_1.Player, { foreignKey: "playerId" });
    ContractTeamPlayer_1.ContractTeamPlayer.belongsTo(Team_1.Team, { foreignKey: "teamId" });
    // Player & User Associations
    Player_1.Player.hasOne(ContractPlayerUser_1.ContractPlayerUser, {
        foreignKey: "playerId",
        onDelete: "CASCADE",
    });
    User_1.User.hasOne(ContractPlayerUser_1.ContractPlayerUser, {
        foreignKey: "userId",
        onDelete: "CASCADE",
    });
    ContractPlayerUser_1.ContractPlayerUser.belongsTo(Player_1.Player, { foreignKey: "playerId" });
    ContractPlayerUser_1.ContractPlayerUser.belongsTo(User_1.User, { foreignKey: "userId" });
    // Session & Team Associations
    // Session.belongsTo(Team, { foreignKey: "teamId" });
    Session_1.Session.belongsTo(Team_1.Team, {
        foreignKey: "teamId",
        onDelete: "CASCADE", // applies to deleting the *Team* (parent)
    });
    // if a team is deleted all corresponding sessions are deleted
    // Video & Session Association
    // Video.belongsTo(Session, { foreignKey: "sessionId" });
    Video_1.Video.belongsTo(Session_1.Session, {
        foreignKey: "sessionId",
        onDelete: "CASCADE", // or "SET NULL" if you prefer to keep videos
    });
    // if a session is deleted all corresponding videos are deleted
    // User & Team Associations: ContractTeamUser (AKA Tribes)
    User_1.User.hasMany(ContractTeamUser_1.ContractTeamUser, { foreignKey: "userId", onDelete: "CASCADE" });
    Team_1.Team.hasMany(ContractTeamUser_1.ContractTeamUser, { foreignKey: "teamId", onDelete: "CASCADE" });
    ContractTeamUser_1.ContractTeamUser.belongsTo(User_1.User, { foreignKey: "userId" });
    ContractTeamUser_1.ContractTeamUser.belongsTo(Team_1.Team, { foreignKey: "teamId" });
    // Script & Action Associations (1-N)
    Script_1.Script.hasMany(Action_1.Action, {
        foreignKey: "scriptId",
        onDelete: "CASCADE",
    });
    Action_1.Action.belongsTo(Script_1.Script, { foreignKey: "scriptId" });
    // ContractTeamUser & Video Associations (1-N)
    ContractTeamUser_1.ContractTeamUser.hasMany(Video_1.Video, {
        foreignKey: "contractTeamUserId",
        onDelete: "CASCADE",
    });
    Video_1.Video.belongsTo(ContractTeamUser_1.ContractTeamUser, { foreignKey: "contractTeamUserId" });
    // League & Team Associations
    League_1.League.hasMany(ContractLeagueTeam_1.ContractLeagueTeam, {
        foreignKey: "leagueId",
        onDelete: "CASCADE",
    });
    Team_1.Team.hasMany(ContractLeagueTeam_1.ContractLeagueTeam, {
        foreignKey: "teamId",
        onDelete: "CASCADE",
    });
    ContractLeagueTeam_1.ContractLeagueTeam.belongsTo(League_1.League, { foreignKey: "leagueId" });
    ContractLeagueTeam_1.ContractLeagueTeam.belongsTo(Team_1.Team, { foreignKey: "teamId" });
    // Session cascade deletes to Script
    Session_1.Session.hasMany(Script_1.Script, {
        foreignKey: "sessionId",
        onDelete: "CASCADE",
    });
    Script_1.Script.belongsTo(Session_1.Session, { foreignKey: "sessionId" });
}
