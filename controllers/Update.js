const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Update extends Model {}

// Create columns and datatypes for comments on blog posts
Update.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dosage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    patient_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'patient',
          key: 'id'
        },
    },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'update'
    }
  );

module.exports = Update;