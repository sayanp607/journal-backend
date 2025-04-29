const express = require('express');
const router = express.Router();
const { getUsername } = require('../controllers/User');

router.get('/:id', getUsername);

module.exports = router;
