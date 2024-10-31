const express = require("express");
const router = express.Router();
const calificacion_proyecto_controller = require("../controllers/calificacion_proyecto_controller"); // Importar el controlador

// Definir las rutas
router.get("/", calificacion_proyecto_controller.get_all_calificacion_proyecto); // Obtener todos las categorias
router.post("/", calificacion_proyecto_controller.post_calificacion_proyecto); // Agregar categorias
router.put("/:id",calificacion_proyecto_controller.put_calificacion_proyecto); //Edita a los ccategorias
router.delete("/:id", calificacion_proyecto_controller.delete_calificaciones_proyecto); //eliminar al categorias
module.exports = router;