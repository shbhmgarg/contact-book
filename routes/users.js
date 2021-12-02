const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const User = require("../models/Users");

// @route POST api/users
// @desc Register a user
// @access public
router.post(
  "/",
  body("name", "Name is required").not().isEmpty(),
  body("email", "Please enter valid email address").isEmail(),
  body("password", "Please enter password with atleast 6 characters").isLength({
    min: 6,
  }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send(req.body);
  }
);

module.exports = router;
