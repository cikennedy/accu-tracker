// requirements for model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create patient model
class Patient extends Model {}

// Include patient information such as first name, last name, birthday, medical history, height,
// weight, start date, (more to be added)

//So the math is
// However many mg they are taking daily times how many days they are taking it for
// For example, if they are on 60mg for 30 days (1 month) that is 1800mg
// So let’s say they did 3 months at 60mg daily, that’s 1800 x 3
// That’s how you calculate how much of the med they have taken so far
// Then you divide that by their weight in kg
// That gets you the mg/kg
// And that’s what we look at to get the cumulative dose
// And we want that number at our clinic to be 225-250 mg/kg
// But if other clinics use a different number, they can input the goal does as something different
// Any questions so far

Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rems_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
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
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height_update: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight_update: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "patient",
  }
);

module.exports = Patient;
