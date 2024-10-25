const express = require("express");
const router = express.Router();
const Roles_Controller = require("../controllers/Roles_controller"); // Importar el controlador

// Definir las rutas
router.get("/", Roles_Controller.get_all_Roles); // Obtener todos los ROLES
router.post("/", Roles_Controller.post_Roles); // Agregar ROLES
router.put("/", Roles_Controller.put_Roles); //Edita a los ROLES
router.delete("/", Roles_Controller.delete_Roles); //eliminar al ROLES
module.exports = router;