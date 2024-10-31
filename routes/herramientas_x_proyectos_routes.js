const express = require("express");
const router = express.Router();
const Herramientas_x_proyectos = require("../controllers/herramientas_x_proyectos"); // Importar el controlador

// Definir las rutas
router.get("/", Herramientas_x_proyectos.get_all_herramientas_x_proyectos); // Obtener todos las categorias
router.post("/", Herramientas_x_proyectos.post_herramientas_x_proyectos); // Agregar categorias
router.put("/:id", Herramientas_x_proyectos.put_herramientas_x_proyectos); //Edita a los ccategorias
router.delete("/:id", Herramientas_x_proyectos.delete_herramientas_x_proyectos); //eliminar al categorias
module.exports = router;