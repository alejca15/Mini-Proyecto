const express = require("express");
const router = express.Router();
const comentarios_routes = require("../controllers/Comentarios_controller"); // Importar el controlador

// Definir las rutas
router.get("/", comentarios_routes.get_all_Comentarios); // Obtener todos las categorias
router.post("/", comentarios_routes.post_Comentarios); // Agregar categorias
router.put("/", comentarios_routes.put_Comentarios); //Edita a los ccategorias
router.delete("/", comentarios_routes.delete_Comentarios); //eliminar al categorias
module.exports = router;