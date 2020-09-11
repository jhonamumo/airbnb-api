const router = require('express').Router();
const { all, reserve } = require('./../controllers/bookingCtrl');

router.post('/', all);
router.post('/reserve', reserve);

module.exports = router;
