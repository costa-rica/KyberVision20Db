// src/models/_index.ts
import { sequelize } from "./_connection";

import { initUser, User } from "./User";
import { initContractUserAction, ContractUserAction } from "./ContractUserAction";
import { applyAssociations } from "./_associations";

/** Initialize all models and associations once per process. */
export function initModels() {
  initUser();
  initContractUserAction();
  applyAssociations();

  return {
    sequelize,
    User,
    ContractUserAction,
  };
}

// 👇 Export named items for consumers
export { sequelize, User, ContractUserAction };