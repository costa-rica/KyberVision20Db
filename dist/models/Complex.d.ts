import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
export declare class Complex extends Model<InferAttributes<Complex>, InferCreationAttributes<Complex>> {
    id: CreationOptional<number>;
    type: string;
}
export declare function initComplex(): typeof Complex;
