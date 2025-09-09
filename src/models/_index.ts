import { sequelize } from "./_connection";

// init each model
import { initUser, User } from "./User";
import { initContractUserAction, ContractUserAction } from "./ContractUserAction";
// ...repeat for all models

import { applyAssociations } from "./_associations";

export function initModels() {
  initUser();
  initContractUserAction();
  // ...init others
  applyAssociations();

  return {
    sequelize,
    User,
    ContractUserAction,
    // ...export the rest
  };
}