const express = require('express');
const router = express.Router();

// load user model
const User = require('../../models/User')

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Users works"})
);

// @route   GET api/users/register
// @desc    registers a user
// @access  Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
});

module.exports = router;