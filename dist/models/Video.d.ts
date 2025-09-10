import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class Video extends Model<InferAttributes<Video>, InferCreationAttributes<Video>> {
    id: CreationOptional<number>;
    sessionId: number;
    contractTeamUserId: number | null;
    filename: string | null;
    url: string | null;
    videoFileCreatedDateTimeEstimate: Date | null;
    videoFileSizeInMb: number | null;
    pathToVideoFile: string | null;
    processingCompleted: CreationOptional<boolean>;
    processingFailed: CreationOptional<boolean>;
    youTubeVideoId: string | null;
    originalVideoFilename: string | null;
}
export declare function initVideo(): typeof Video;
