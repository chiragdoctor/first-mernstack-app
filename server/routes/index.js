var express = require('express');
var router = express.Router();

const User = require('../models/user');

/* GET home page. */
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json({ users });
});

router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();

  res.json({ user });
});

module.exports = router;
