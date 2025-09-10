import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    id: CreationOptional<number>;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    isAdminForKvManagerWebsite: CreationOptional<boolean>;
}
export declare function initUser(): typeof User;
