import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class ContractLeagueTeam extends Model<InferAttributes<ContractLeagueTeam>, InferCreationAttributes<ContractLeagueTeam>> {
    id: CreationOptional<number>;
    leagueId: number;
    teamId: number;
}
export declare function initContractLeagueTeam(): typeof ContractLeagueTeam;
