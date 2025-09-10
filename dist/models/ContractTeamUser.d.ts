import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class ContractTeamUser extends Model<InferAttributes<ContractTeamUser>, InferCreationAttributes<ContractTeamUser>> {
    id: CreationOptional<number>;
    userId: number;
    teamId: number;
    isSuperUser: CreationOptional<boolean>;
    isAdmin: CreationOptional<boolean>;
    isCoach: CreationOptional<boolean>;
}
export declare function initContractTeamUser(): typeof ContractTeamUser;
