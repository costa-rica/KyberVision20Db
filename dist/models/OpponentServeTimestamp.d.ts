import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class OpponentServeTimestamp extends Model<InferAttributes<OpponentServeTimestamp>, InferCreationAttributes<OpponentServeTimestamp>> {
    id: CreationOptional<number>;
    actionId: number;
    timestampServiceOpp: Date;
    serveType: number;
}
export declare function initOpponentServeTimestamp(): typeof OpponentServeTimestamp;
