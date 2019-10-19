const Sequelize = require('sequelize');
// your credentials
DATABASE_URL = 'postgres://lsamano:pass@127.0.0.1:5432/virtuna-db';

const database = new Sequelize(DATABASE_URL);

module.exports = database;
