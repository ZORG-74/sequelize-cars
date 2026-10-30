const { Sequelize } = require('sequelize');

// Файл database.sqlite создастся автоматически в корне проекта
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false, // отключаем SQL-логи в консоли
});

module.exports = sequelize;