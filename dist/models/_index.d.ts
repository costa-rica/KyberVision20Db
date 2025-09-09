import { sequelize } from "./_connection";
import { User } from "./User";
import { ContractUserAction } from "./ContractUserAction";
/** Initialize all models and associations once per process. */
export declare function initModels(): {
    sequelize: import("sequelize").Sequelize;
    User: typeof User;
    ContractUserAction: typeof ContractUserAction;
};
export { sequelize, User, ContractUserAction };
