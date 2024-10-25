const express = require('express');
const { sequelize } = require('./models'); // Importa la conexión a la base de datos
const usuariosRoutes = require('./routes/usuarios_routes'); // Importa las rutas de productos
const tareasRoutes = require('./routes/Tareas_routas')
const rolesRoutes = require('./routes/Roles_routas')
const responsables_x_proyectosRoutes = require('./routes/responsables_x_proyectos_routes')
const proyectoRoutes = require('./routes/proyecto_routes')
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para parsear JSON

// Probar la conexión con la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch((error) => console.error('No se pudo conectar a la base de datos:', error));

// Usar las rutas de productos
app.use('/Usuarios', usuariosRoutes);
app.use('/Tareas', tareasRoutes);
app.use('/Roles', rolesRoutes)
app.use('/Proyectos', proyectoRoutes)
app.use('/ResponsablesxProyectos', responsables_x_proyectosRoutes)

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});