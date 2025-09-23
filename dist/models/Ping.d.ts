import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class Ping extends Model<InferAttributes<Ping>, InferCreationAttributes<Ping>> {
    id: CreationOptional<number>;
    userId: number;
    serverTimestamp: CreationOptional<Date>;
    userDeviceTimestamp: Date;
    endpointName: string;
}
export declare function initPing(): typeof Ping;
