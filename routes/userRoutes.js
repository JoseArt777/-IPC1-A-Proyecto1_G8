const express = require('express');
const { register, login, getCatalog, rentMovie, returnMovie, getRentalHistory } = require('../controllers/userController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/catalog', getCatalog);
router.post('/rent/:id', rentMovie);
router.post('/return/:id', returnMovie);
router.get('/history/:userId', getRentalHistory);

module.exports = router;
