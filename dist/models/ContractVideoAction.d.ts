import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class ContractVideoAction extends Model<InferAttributes<ContractVideoAction>, InferCreationAttributes<ContractVideoAction>> {
    id: CreationOptional<number>;
    actionId: number;
    videoId: number | null;
    deltaTimeInSeconds: CreationOptional<number | null>;
}
export declare function initContractVideoAction(): typeof ContractVideoAction;
