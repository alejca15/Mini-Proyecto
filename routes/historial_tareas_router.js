const express = require("express");
const router = express.Router();
const historial_tareas = require("../controllers/historial_tareas_controller"); // Importar el controlador

// Definir las rutas
router.get("/", historial_tareas.get_all_historial_tarea); // Obtener todos las categorias
router.post("/", historial_tareas.post_historial_tarea); // Agregar categorias
router.put("/:id", historial_tareas.put_historial_tarea); //Edita a los ccategorias
router.delete("/:id",historial_tareas.delete_historial_tarea); //eliminar al categorias
module.exports = router;