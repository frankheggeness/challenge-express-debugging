const express = require('express');
const router = express.Router();

const get = require('./get');

router.get('/', (req, res) => {
  res.render('./home');
});

module.exports = router;
