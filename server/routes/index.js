var express = require('express');
var router = express.Router();

const User = require('../models/user');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ msg: 'hello world' });
});

router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();

  res.json({ user });
});

module.exports = router;
