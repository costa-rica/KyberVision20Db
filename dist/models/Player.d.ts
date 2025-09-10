import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class Player extends Model<InferAttributes<Player>, InferCreationAttributes<Player>> {
    id: CreationOptional<number>;
    firstName: string;
    lastName: string;
    birthDate: Date | null;
    image: CreationOptional<string>;
}
export declare function initPlayer(): typeof Player;
