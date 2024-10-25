const express = require("express");
const router = express.Router();
const Tareas_Controller = require("../controllers/Tareas_controller"); // Importar el controlador

// Definir las rutas
router.get("/", Tareas_Controller.get_all_Tareas); // Obtener todos los TAREAS
router.post("/", Tareas_Controller.post_Tareas); // Agregar TAREAS
router.put("/", Tareas_Controller.put_Tareas); //Edita a los TAREAS
router.delete("/", Tareas_Controller.delete_Tareas); //eliminar al TAREAS
module.exports = router;