const express = require("express");
const router = express.Router();
const Usuarios_Controller = require("../controllers/Usuarios_controller"); // Importar el controlador

// Definir las rutas
router.get("/", Usuarios_Controller.get_all_usuarios); // Obtener todos los clientes
router.post("/", Usuarios_Controller.post_usuario); // Agregar clientes
module.exports = router;
