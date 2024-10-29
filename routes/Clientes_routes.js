const express = require("express");
const router = express.Router();
const Clientes_controller = require("../controllers/Clientes_controller"); // Importar el controlador

// Definir las rutas
router.get("/", Clientes_controller.get_all_Cliente); // Obtener todos los clientes
router.post("/", Clientes_controller.post_Cliente); // Agregar clientes
router.put("/", Clientes_controller.put_Cliente); //Edita a los clientes
router.delete("/", Clientes_controller.delete_Cliente); //eliminar al cliente
module.exports = router;