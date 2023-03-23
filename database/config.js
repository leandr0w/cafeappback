const { Sequelize } = require('sequelize');
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localHost',
  username: 'postgres',
  password: 'akg123456',
  database: 'cafeappdatabase',
  port: '5432',
  logging: false,
});
module.exports = { db };
