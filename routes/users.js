const express = require('express');

const router = express.Router();


const usersController = require('../controller/controller-users');

// get all users
router.get('/', usersController.getAll);

// get single user

router.get('/:id', usersController.getSingle);


module.exports = router;