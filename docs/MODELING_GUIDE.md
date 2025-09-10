# Modeling Guide (KyberVision20Db, TypeScript + Sequelize)

This guide defines how to convert legacy JS models from **KyberVision18Db** to TypeScript in **KyberVision20Db**.

## Goals

- One class per table (`src/models/<Name>.ts`) with strong typings.
- Centralized initialization and associations.
- Emit `.d.ts` so downstream apps (API, mobile) get type-safe imports.

## Directory Layout

This is the directory layout of the KyberVision18Db package. The KyberVision20Db package will have a similar layout - except it will use a src/ directory.

```
.
├── docs
│   └── images
│       └── kyberVisionLogo01.png
├── index.js
├── models
│   ├── _associations.js
│   ├── _connection.js
│   ├── _index.js
│   ├── Action.js
│   ├── Complex.js
│   ├── ContractLeagueTeam.js
│   ├── ContractPlayerUser.js
│   ├── ContractTeamPlayer.js
│   ├── ContractTeamUser.js
│   ├── ContractUserAction.js
│   ├── ContractVideoAction.js
│   ├── League.js
│   ├── OpponentServeTimestamp.js
│   ├── PendingInvitations.js
│   ├── Player.js
│   ├── Script.js
│   ├── Session.js
│   ├── Team.js
│   ├── User.js
│   └── Video.js
├── package.json
└── README.md
```

## Conventions

- **Model class name:** `PascalCase` (e.g., `ContractTeamUser`)
- **Table name:** explicit `tableName: "snake_case"` or your existing table name
- **Columns:** `snake_case` in DB; camelCase in TS properties
- **Primary key:** `id` `INTEGER` auto-increment unless legacy says otherwise
- **Timestamps:** `timestamps: true` unless legacy explicitly disabled
- **Foreign keys:** `snake_case` (e.g., `userId` column in TS maps to `user_id` if using `underscored: true`)
- **Types:** Use `InferAttributes<T>`, `InferCreationAttributes<T>`, `CreationOptional<T>`, `ForeignKey<T>`, `NonAttribute<T>`

## Template (copy for each new model)

```ts
// src/models/Example.ts
import {
	DataTypes,
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	ForeignKey,
	NonAttribute,
} from "sequelize";
import { sequelize } from "./_connection";

export class Example extends Model<
	InferAttributes<Example>,
	InferCreationAttributes<Example>
> {
	declare id: CreationOptional<number>;
	declare name: string;

	// FK example:
	// declare userId: ForeignKey<User["id"]>;
	// declare user?: NonAttribute<User>;
}

export function initExample() {
	Example.init(
		{
			id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
			name: { type: DataTypes.STRING, allowNull: false },
			// userId: { type: DataTypes.INTEGER, allowNull: false }
		},
		{
			sequelize,
			tableName: "examples",
			timestamps: true,
		}
	);
	return Example;
}
```

## Porting Workflow (for each legacy model)

1. Open the matching JS file in docs/KyberVision18DbReference/.
2. Create src/models/<Name>.ts using the Template above.
3. Map each legacy field to DataTypes.\* and constraints (allowNull, defaultValue, unique, etc.).
4. Add any indexes present in the legacy model.
5. Add the model to \_index.ts, then wire its associations in \_associations.ts.

Example: Referencing Legacy JS

Legacy sources are placed in docs/KyberVision18DbReference/ for guidance only. Do not import from them.

## Done Criteria

- Model compiles with no any types on attributes.
- Associations compile without casting.
- sequelize.sync() succeeds locally.
