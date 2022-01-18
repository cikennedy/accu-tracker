// controller
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const patientRoutes = require('./patientRoutes');
const updateRoutes = require('./updateRoutes');

router.use('/users', userRoutes);
router.use('/posts', patientRoutes);
router.use('/replies', updateRoutes);

module.exports = router;