import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from "sequelize";
  import { sequelize } from "./_connection";
  
  export class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
  > {
    declare id: CreationOptional<number>;
    declare username: string;
    declare password: string;
    declare email: string;
    declare isAdminForKvManagerWebsite: CreationOptional<boolean>;
  }
  
  export function initUser() {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        isAdminForKvManagerWebsite: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      { tableName: "users", sequelize }
    );
    return User;
  }