const router = require('express').Router();

const { signup, getbill } = require('../controller/appController.js')


/** HTTP Reqeust */
router.post('/send/getbill', getbill);


module.exports = router;