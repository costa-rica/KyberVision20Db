import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class Action extends Model<InferAttributes<Action>, InferCreationAttributes<Action>> {
    id: CreationOptional<number>;
    complexId: number | null;
    pointId: number | null;
    scriptId: number | null;
    playerId: number;
    type: number;
    subtype: number | null;
    quality: string;
    timestamp: Date;
    zone: string;
    setNumber: number;
    scoreTeamAnalyzed: number;
    scoreTeamOther: number;
    rotation: string | null;
}
export declare function initAction(): typeof Action;
