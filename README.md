![Logo](./docs/images/kyberVisionLogo01.png)

A Sequelize SQLite module for the KyberVision20API and microservices suite of applications.

- Renamed Tables

  - CompetitionContracts: ContractLeagueTeam
  - playerContracts: ContractTeamPlayer
  - groupContracts: ContractTeamUser (Tribe)
  - syncContracts: ContractVideoAction
    - renamed and restructured to delta time for each action

- we are using YouTube to stream the videos

### API v20.0.0

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
