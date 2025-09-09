import { User } from "./User";
import { ContractUserAction } from "./ContractUserAction";

export function applyAssociations(): void {
  User.hasMany(ContractUserAction, { foreignKey: "userId", onDelete: "CASCADE" });
  ContractUserAction.belongsTo(User, { foreignKey: "userId" });
}