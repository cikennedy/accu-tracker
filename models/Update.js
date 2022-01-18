const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Update extends Model {}

// Create columns and datatypes for patient updates on visits. This will include the appointment date,
//  dosage administered, follow up date, and notes on the visit
Update.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    appointment_date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dosage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    followup_date: {
        type: DataTypes.STRING,
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