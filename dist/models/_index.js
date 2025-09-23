"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ping = exports.PendingInvitations = exports.OpponentServeTimestamp = exports.ContractPlayerUser = exports.ContractLeagueTeam = exports.ContractTeamUser = exports.ContractVideoAction = exports.ContractTeamPlayer = exports.Complex = exports.Script = exports.Video = exports.Session = exports.Player = exports.Team = exports.League = exports.Action = exports.ContractUserAction = exports.User = exports.sequelize = void 0;
exports.initModels = initModels;
// src/models/_index.ts
const _connection_1 = require("./_connection");
Object.defineProperty(exports, "sequelize", { enumerable: true, get: function () { return _connection_1.sequelize; } });
const User_1 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
const ContractUserAction_1 = require("./ContractUserAction");
Object.defineProperty(exports, "ContractUserAction", { enumerable: true, get: function () { return ContractUserAction_1.ContractUserAction; } });
const Action_1 = require("./Action");
Object.defineProperty(exports, "Action", { enumerable: true, get: function () { return Action_1.Action; } });
const League_1 = require("./League");
Object.defineProperty(exports, "League", { enumerable: true, get: function () { return League_1.League; } });
const Team_1 = require("./Team");
Object.defineProperty(exports, "Team", { enumerable: true, get: function () { return Team_1.Team; } });
const Player_1 = require("./Player");
Object.defineProperty(exports, "Player", { enumerable: true, get: function () { return Player_1.Player; } });
const Session_1 = require("./Session");
Object.defineProperty(exports, "Session", { enumerable: true, get: function () { return Session_1.Session; } });
const Video_1 = require("./Video");
Object.defineProperty(exports, "Video", { enumerable: true, get: function () { return Video_1.Video; } });
const Script_1 = require("./Script");
Object.defineProperty(exports, "Script", { enumerable: true, get: function () { return Script_1.Script; } });
const Complex_1 = require("./Complex");
Object.defineProperty(exports, "Complex", { enumerable: true, get: function () { return Complex_1.Complex; } });
const ContractTeamPlayer_1 = require("./ContractTeamPlayer");
Object.defineProperty(exports, "ContractTeamPlayer", { enumerable: true, get: function () { return ContractTeamPlayer_1.ContractTeamPlayer; } });
const ContractVideoAction_1 = require("./ContractVideoAction");
Object.defineProperty(exports, "ContractVideoAction", { enumerable: true, get: function () { return ContractVideoAction_1.ContractVideoAction; } });
const ContractTeamUser_1 = require("./ContractTeamUser");
Object.defineProperty(exports, "ContractTeamUser", { enumerable: true, get: function () { return ContractTeamUser_1.ContractTeamUser; } });
const ContractLeagueTeam_1 = require("./ContractLeagueTeam");
Object.defineProperty(exports, "ContractLeagueTeam", { enumerable: true, get: function () { return ContractLeagueTeam_1.ContractLeagueTeam; } });
const ContractPlayerUser_1 = require("./ContractPlayerUser");
Object.defineProperty(exports, "ContractPlayerUser", { enumerable: true, get: function () { return ContractPlayerUser_1.ContractPlayerUser; } });
const OpponentServeTimestamp_1 = require("./OpponentServeTimestamp");
Object.defineProperty(exports, "OpponentServeTimestamp", { enumerable: true, get: function () { return OpponentServeTimestamp_1.OpponentServeTimestamp; } });
const PendingInvitations_1 = require("./PendingInvitations");
Object.defineProperty(exports, "PendingInvitations", { enumerable: true, get: function () { return PendingInvitations_1.PendingInvitations; } });
const Ping_1 = require("./Ping");
Object.defineProperty(exports, "Ping", { enumerable: true, get: function () { return Ping_1.Ping; } });
const _associations_1 = require("./_associations");
/** Initialize all models and associations once per process. */
function initModels() {
    (0, User_1.initUser)();
    (0, ContractUserAction_1.initContractUserAction)();
    (0, Action_1.initAction)();
    (0, League_1.initLeague)();
    (0, Team_1.initTeam)();
    (0, Player_1.initPlayer)();
    (0, Session_1.initSession)();
    (0, Video_1.initVideo)();
    (0, Script_1.initScript)();
    (0, Complex_1.initComplex)();
    (0, ContractTeamPlayer_1.initContractTeamPlayer)();
    (0, ContractVideoAction_1.initContractVideoAction)();
    (0, ContractTeamUser_1.initContractTeamUser)();
    (0, ContractLeagueTeam_1.initContractLeagueTeam)();
    (0, ContractPlayerUser_1.initContractPlayerUser)();
    (0, OpponentServeTimestamp_1.initOpponentServeTimestamp)();
    (0, PendingInvitations_1.initPendingInvitations)();
    (0, Ping_1.initPing)();
    (0, _associations_1.applyAssociations)();
    return {
        sequelize: _connection_1.sequelize,
        User: User_1.User,
        ContractUserAction: ContractUserAction_1.ContractUserAction,
        Action: Action_1.Action,
        League: League_1.League,
        Team: Team_1.Team,
        Player: Player_1.Player,
        Session: Session_1.Session,
        Video: Video_1.Video,
        Script: Script_1.Script,
        Complex: Complex_1.Complex,
        ContractTeamPlayer: ContractTeamPlayer_1.ContractTeamPlayer,
        ContractVideoAction: ContractVideoAction_1.ContractVideoAction,
        ContractTeamUser: ContractTeamUser_1.ContractTeamUser,
        ContractLeagueTeam: ContractLeagueTeam_1.ContractLeagueTeam,
        ContractPlayerUser: ContractPlayerUser_1.ContractPlayerUser,
        OpponentServeTimestamp: OpponentServeTimestamp_1.OpponentServeTimestamp,
        PendingInvitations: PendingInvitations_1.PendingInvitations,
        Ping: Ping_1.Ping,
    };
}
