const express = require('express');
const { iniciarSesion } = require(' .. /controllers/authController');
const router = express.Router();

// Ruta para iniciar sesion
router.post('/login', iniciarSesion);

module.exports = router;