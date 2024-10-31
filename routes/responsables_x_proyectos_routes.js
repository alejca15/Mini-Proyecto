const express = require("express");
const router = express.Router();
const responsable_x_proyecto_controller = require("../controllers/responsables_x_proyectos_controller"); // Importar el controlador

// Definir las rutas
router.get("/", responsable_x_proyecto_controller.get_all_responsables_x_proyectos); // Obtener todos los clientes
router.post("/", responsable_x_proyecto_controller.post_responsables_x_proyectos); // Agregar clientes
router.put("/:id", responsable_x_proyecto_controller.put_responsables_x_proyectos); //Edita a los clientes
router.delete("/:id", responsable_x_proyecto_controller.delete_responsables_x_proyectos); //eliminar al cliente
module.exports = router;
