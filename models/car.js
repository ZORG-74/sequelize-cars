const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Car = sequelize.define('Car', {
  brand: {
    type: DataTypes.STRING,
    allowNull: false,          // обязательное поле
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,          // обязательное поле
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  tableName: 'cars',
  timestamps: true, // добавляет createdAt / updatedAt автоматически
});

module.exports = Car;