const express = require('express')
const router = express.Router();

const {addUser, loginUser} = require('../controllers/userController');

router.use(express.json());

router.post('/addUser', addUser);
router.post('/login', loginUser);

module.exports = router;