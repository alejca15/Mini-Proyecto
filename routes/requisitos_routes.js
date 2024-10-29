const express = require("express");
const router = express.Router();
const requisitos_controller = require("../controllers/requisitos_controller"); // Importar el controlador

// Definir las rutas
router.get("/", requisitos_controller.get_all_requisitos); // Obtener todos las categorias
router.post("/", requisitos_controller.post_requisitos); // Agregar categorias
router.put("/", requisitos_controller.put_requisitos); //Edita a los ccategorias
router.delete("/", requisitos_controller.delete_requisitos); //eliminar al categorias
module.exports = router;