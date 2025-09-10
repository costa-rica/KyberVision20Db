import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class Session extends Model<InferAttributes<Session>, InferCreationAttributes<Session>> {
    id: CreationOptional<number>;
    contractLeagueTeamId: number;
    teamId: number;
    sessionDate: Date;
    city: string | null;
    sessionName: string | null;
}
export declare function initSession(): typeof Session;
