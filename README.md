![Logo](./docs/images/kyberVisionLogo01.png)

A Sequelize SQLite module for the KyberVision20API and microservices suite of applications.

## v20 TypeScript Migration (DB Models)

We are migrating the Sequelize models from **KyberVision18Db** (JavaScript) to **KyberVision20Db** (TypeScript).  
The canonical examples are `User.ts` and `ContractUserAction.ts`. All remaining models should follow the same pattern.

- Implementation guide: see **docs/MODELING_GUIDE.md**
- Legacy references (v18 JS): **docs/KyberVision18DbReference/**
- Package usage: `npm i file:../KyberVision20Db` then `import { initModels } from "kybervision20db";`
- Build before commit: `npm run build` (we commit `dist/`)

If adding a new model, ensure:

1. `Model.init` lives in `src/models/<Model>.ts` and returns the class via `init<Model>()`.
2. Foreign keys use `snake_case` columns; model names are `PascalCase`.
3. Add the model to `src/models/_index.ts` and wire associations in `_associations.ts`.
4. Run `npm run build`, and verify types are emitted (`dist/index.d.ts`).

### v20.0.0

## installation

1. `npm init -y`
2. `npm install sequelize sqlite3`
3. `npm install -D typescript ts-node @types/node @types/sequelize`
4. `npx tsc --init`
   - modify tsconfig.json
5. modify pacakge.json particularly for the /dist folder

## import to other apps

`npm i file:../KyberVision20Db`

## Environmental Variables

- No .env file is needed becuase this package will use the .env vars from the project it is imported into.

## Project Structure

- entry point: index.js
  - and models/\_index.js
- connection: models/\_connection.js
- Table schemas are in models/ directory with the same name as the table
- associations are in models/\_associations.js
