const express = require('express');
const router = express.Router();
const {pronounciation} = require('../controllers/pronounciation');

router.post('/',pronounciation);

module.exports = router;
