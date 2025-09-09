import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class ContractUserAction extends Model<InferAttributes<ContractUserAction>, InferCreationAttributes<ContractUserAction>> {
    id: CreationOptional<number>;
    userId: number;
    actionId: number;
    sessionId: number;
}
export declare function initContractUserAction(): typeof ContractUserAction;
