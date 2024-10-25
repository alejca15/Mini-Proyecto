const express = require("express");
const router = express.Router();
const proyecto_controller = require("../controllers/Proyectos_controller"); // Importar el controlador

// Definir las rutas
router.get("/", proyecto_controller.get_all_proyectos); // Obtener todos los clientes
router.post("/", proyecto_controller.post_proyectos); // Agregar clientes
router.put("/", proyecto_controller.put_proyectos); //Edita a los clientes
router.delete("/", proyecto_controller.delete_proyecto); //eliminar al cliente
module.exports = router;
