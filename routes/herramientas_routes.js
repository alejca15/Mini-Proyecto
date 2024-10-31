const express = require("express");
const router = express.Router();
const herramientas_controller = require("../controllers/herramientas_controller"); // Importar el controlador

// Definir las rutas
router.get("/", herramientas_controller.get_all_herramientas); // Obtener todos las categorias
router.post("/", herramientas_controller.post_heramientas); // Agregar categorias
router.put("/:id", herramientas_controller.put_herramientas); //Edita a los ccategorias
router.delete("/:id", herramientas_controller.delete_herramientas); //eliminar al categorias
module.exports = router;