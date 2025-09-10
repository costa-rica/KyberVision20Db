import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class Team extends Model<InferAttributes<Team>, InferCreationAttributes<Team>> {
    id: CreationOptional<number>;
    teamName: string;
    city: string | null;
    coachName: string | null;
    description: string | null;
    image: string | null;
    visibility: CreationOptional<string>;
}
export declare function initTeam(): typeof Team;
