const express = require("express");
const router = express.Router();
const Coach_controller = require("../controllers/coach_controller"); // Importar el controlador

// Definir las rutas
router.get("/", Coach_controller.get_all_coach); // Obtener todos las categorias
router.post("/", Coach_controller.post_coach); // Agregar categorias
router.put("/", Coach_controller.put_coach); //Edita a los ccategorias
router.delete("/", Coach_controller.delete_coach); //eliminar al categorias
module.exports = router;