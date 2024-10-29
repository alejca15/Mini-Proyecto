const express = require("express");
const router = express.Router();
const Calificaciones_usuarios = require("../controllers/calificaciones_usuarios"); // Importar el controlador

// Definir las rutas
router.get("/", Calificaciones_usuarios.get_all_calificaciones_usuarios); // Obtener todos las categorias
router.post("/", Calificaciones_usuarios.post_calificaciones_usuarios); // Agregar categorias
router.put("/", Calificaciones_usuarios.put_calificaciones_usuarios); //Edita a los ccategorias
router.delete("/", Calificaciones_usuarios.delete_calificaciones_usuarios); //eliminar al categorias
module.exports = router;