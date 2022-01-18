// requirements for model 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create patient model 
class Patient extends Model {}

// Include patient information such as first name, last name, birthday, medical history, height,
// weight, start date, (more to be added)
Patient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        medical_history: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        height: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        start_date: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        }
       
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'patient'
    }
);

module.exports = Patient;