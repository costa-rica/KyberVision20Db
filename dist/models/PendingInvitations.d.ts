import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class PendingInvitations extends Model<InferAttributes<PendingInvitations>, InferCreationAttributes<PendingInvitations>> {
    id: CreationOptional<number>;
    email: string;
    teamId: number;
}
export declare function initPendingInvitations(): typeof PendingInvitations;
