const express = require("express");
const router = express.Router();
const Usuarios_Controller = require("../controllers/Usuarios_controller"); // Importar el controlador

// Definir las rutas
router.get("/", Usuarios_Controller.get_all_usuarios); // Obtener todos los clientes
router.post("/", Usuarios_Controller.post_usuario); // Agregar clientes
router.put("/:id", Usuarios_Controller.put_Usuario); //Edita a los clientes
router.delete("/:id", Usuarios_Controller.delete_Usuario); //eliminar al cliente
module.exports = router;
