const express = require("express");
const router = express.Router();
const Categorias_controller = require("../controllers/categorias_controller"); // Importar el controlador

// Definir las rutas
router.get("/", Categorias_controller.get_all_Categoria); // Obtener todos las categorias
router.post("/", Categorias_controller.post_Categoria); // Agregar categorias
router.put("/:id", Categorias_controller.put_Categoria); //Edita a los ccategorias
router.delete("/:id", Categorias_controller.delete_Categoria); //eliminar al categorias
module.exports = router;