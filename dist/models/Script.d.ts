import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class Script extends Model<InferAttributes<Script>, InferCreationAttributes<Script>> {
    id: CreationOptional<number>;
    sessionId: number;
    timestampReferenceFirstAction: Date | null;
    isScriptingLive: CreationOptional<boolean>;
}
export declare function initScript(): typeof Script;
