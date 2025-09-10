import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class ContractPlayerUser extends Model<InferAttributes<ContractPlayerUser>, InferCreationAttributes<ContractPlayerUser>> {
    id: CreationOptional<number>;
    playerId: number;
    userId: number;
}
export declare function initContractPlayerUser(): typeof ContractPlayerUser;
