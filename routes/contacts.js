const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc Get all user's contacts
// @access Private
router.get('/', (req, res) => {
  res.send('Gets all contacts');
});

// @route POST api/contacts
// @desc All new user's contacts
// @access Private
router.post('/', (req, res) => {
  res.send('Create contacts');
});

// @route PUT api/contacts/:id
// @desc Update contacts
// @access Private
router.put('/:id', (req, res) => {
  res.send('Update contacts');
});

// @route DELETE api/contacts/:id
// @desc Delete user's contacts
// @access Private
router.delete('/:id', (req, res) => {
  res.send('Delete contacts');
});

module.exports = router;