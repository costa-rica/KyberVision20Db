import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class ContractTeamPlayer extends Model<InferAttributes<ContractTeamPlayer>, InferCreationAttributes<ContractTeamPlayer>> {
    id: CreationOptional<number>;
    playerId: number;
    teamId: number;
    shirtNumber: number | null;
    position: string | null;
    positionAbbreviation: string | null;
    role: string | null;
}
export declare function initContractTeamPlayer(): typeof ContractTeamPlayer;
