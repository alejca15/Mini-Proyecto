# Mini-Proyecto

Este proyecto está construido con Node.js y sigue una estructura modularizada para mantener un código limpio,
escalable y fácil de mantener. A continuación, se explica brevemente la funcionalidad de los archivos y
carpetas principales.

# Estructura del Proyecto

# Config:

Contiene configuraciones esenciales para el proyecto, como la configuración de variables de entorno, conexiones
a bases de datos, y otros parámetros que pueden necesitar ajustes según el entorno (desarrollo, producción,
pruebas). Normalmente se incluyen archivos como config.js o env.js que permiten la gestión centralizada de
estos ajustes.

# controllers:

Esta carpeta contiene los controladores de la aplicación. Los controladores son responsables de la lógica de
negocio y manejan las peticiones que reciben desde las rutas (routes). Por lo general, aquí se realiza el
procesamiento de datos, validaciones y la interacción con los módulos o modelos antes de enviar una respuesta
al cliente.

# db:

Esta carpeta suele contener la configuración y conexión a la base de datos, junto con posibles archivos
relacionados. Aquí puede incluirse un archivo como database.js, que maneja la inicialización de la conexión a
la base de datos y su configuración específica.

# middlewares:

Los middlewares son funciones que interceptan las peticiones HTTP antes de que lleguen al controlador. Se
pueden usar para realizar tareas como la autenticación, validación de datos, registro de actividad (logging) y
control de permisos. Estos se definen en esta carpeta y se integran en las rutas o en la configuración de la
aplicación.

# migrations:

Las migraciones permiten realizar cambios en la estructura de la base de datos de forma controlada y
programada. Aquí se guardan los scripts de migración, que permiten crear, modificar o eliminar tablas y
columnas. Las migraciones ayudan a mantener sincronizada la estructura de la base de datos en distintos
entornos y en el equipo de desarrollo.

# modules:

Esta carpeta contiene módulos independientes que pueden incluir lógica de negocio o funcionalidad compartida
entre distintas partes del proyecto. Por ejemplo, puedes tener un módulo para el manejo de usuarios, productos
o cualquier otra entidad principal en el sistema. Cada módulo puede incluir su propio modelo, controlador y
rutas.

# routes:

Las rutas son los puntos de entrada para las solicitudes HTTP. Aquí se definen las rutas de la API y se
vinculan con los controladores correspondientes. Cada ruta define un endpoint y el tipo de solicitud (GET,
POST, PUT, DELETE) que soporta, permitiendo que el servidor procese la solicitud adecuada.

# Servidor Principal (index.js)

El archivo index.js es el punto de entrada de nuestra aplicación Node.js. Configura el servidor Express,
conecta con la base de datos y define las rutas principales de la API.

# Estructura y Funcionalidad

Inicialización de Express y Middlewares:

Crea una instancia de Express.
Configura express.json() para procesar datos en formato JSON en las solicitudes.
Conexión a la Base de Datos:

La conexión se establece usando Sequelize. El archivo index.js realiza una prueba inicial de la conexión y
muestra un mensaje en la consola indicando si fue exitosa o no.

# Rutas:

El servidor define varias rutas para manejar diferentes recursos, como Usuarios, Tareas, Proyectos, Clientes, y
más.
El middleware de autenticación auth.verificarToken se aplica en las rutas que requieren autenticación, como /
Tareas.

# Lista de Rutas:

/auth: Rutas de autenticación.
/Usuarios: Gestión de usuarios.
/Tareas: Gestión de tareas (restringido con autenticación).
/Roles: Gestión de roles.
/Proyectos: Gestión de proyectos.
/ResponsablesxProyectos: Gestión de responsables asignados a proyectos.
/requisitos: Gestión de requisitos de los proyectos.
/historial: Historial de cambios de tareas.
/herramientas_x_proyectos: Gestión de herramientas asociadas a proyectos.
/herramientas: Gestión de herramientas en general.
/comentarios: Gestión de comentarios en el sistema.
/coach: Gestión de coach o mentores.
/clientes: Gestión de clientes.
/categorias: Gestión de categorías.
/calificaciones: Gestión de calificaciones.
/calificacion_proyecto: Calificación específica para proyectos.

instalacion del proyecto

Clona el repositorio:

git clone <url-del-repositorio>

Instala las dependencias:

npm install

Ejecuta las migraciones para crear la estructura de la base de datos:

npx sequelize-cli db:migrate

Para iniciar el servidor, utiliza el siguiente comando:

node index.js
