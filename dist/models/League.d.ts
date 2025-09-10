import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class League extends Model<InferAttributes<League>, InferCreationAttributes<League>> {
    id: CreationOptional<number>;
    name: string;
    category: string;
}
export declare function initLeague(): typeof League;
