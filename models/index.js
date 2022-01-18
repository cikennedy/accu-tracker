const User = require('./User');
const Patient = require('./Patient');
const Update = require('./Update');

User.hasMany(Patient, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Patient.hasMany(Update, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Patient.belongsTo(User, {
    foreignKey: 'user_id',
});

Update.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    User,
    Patient,
    Update,
};