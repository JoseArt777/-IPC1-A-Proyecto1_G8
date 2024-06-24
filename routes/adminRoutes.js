const express = require('express');
const { addMovie, updateMovie, deleteMovie, deleteUser } = require('../controllers/adminController');
const router = express.Router();

router.post('/movies', addMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);
router.delete('/users/:id', deleteUser);

module.exports = router;
