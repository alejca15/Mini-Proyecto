const express = require('express');
const { sequelize } = require('./models'); // Importa la conexión a la base de datos
const usuariosRoutes = require('./routes/usuarios_routes'); // Importa las rutas de productos
const tareasRoutes = require('./routes/Tareas_routas')
const rolesRoutes = require('./routes/Roles_routas')
const requisitosRoutes = require('./routes/requisitos_routes')
const responsables_x_proyectosRoutes = require('./routes/responsables_x_proyectos_routes')
const historial_tareas_Routes = require('./routes/historial_tareas_router')
const herramientas_x_proyectos = require('./routes/herramientas_x_proyectos_routes')
const herramientas_routes = require('./routes/herramientas_routes')
const comentarios_routes = require('./routes/comentarios_routes')
const coach_routes = require('./routes/coach_routes')
const Clientes_routes = require('./routes/Clientes_routes')
const Categorias_routes = require('./routes/Categorias_routes')
const calificaciones_routes = require('./routes/calificaciones_routes')
const calificacion_proyecto_routes = require('./routes/calificacion_proyecto_routes')






const proyectoRoutes = require('./routes/proyecto_routes')
const app = express();
const PORT = 3000;
const authRoutes = require('./routes/auth_routes');

app.use(express.json()); // Middleware para parsear JSON

// Probar la conexión con la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch((error) => console.error('No se pudo conectar a la base de datos:', error));

// Usar las rutas de productos

app.use('/auth', authRoutes);
app.use('/Usuarios', usuariosRoutes);
app.use('/Tareas', tareasRoutes);
app.use('/Roles', rolesRoutes)
app.use('/Proyectos', proyectoRoutes)
app.use('/ResponsablesxProyectos', responsables_x_proyectosRoutes)
app.use('/requisitos', requisitosRoutes)
app.use('/historial',historial_tareas_Routes)
app.use('/herramientas_x_proyectos',herramientas_x_proyectos)
app.use('/herramientas',herramientas_routes)
app.use('/comentarios',comentarios_routes)
app.use('/coach',coach_routes)
app.use('/clientes',Clientes_routes)
app.use('/categorias',Categorias_routes)
app.use('/calificaciones',calificaciones_routes)
app.use('/calificacion_proyecto',calificacion_proyecto_routes)


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});