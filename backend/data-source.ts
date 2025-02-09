const { DataSource } = require('typeorm');

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'event_planner_db',
    synchronize: false,
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/**/*.entity.ts'],
    logging: true
});

module.exports = { AppDataSource };
