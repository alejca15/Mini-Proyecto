const users = require("../controllers/Usuarios_controller");
const RxP = require("../controllers/responsables_x_proyectos_controller");
const clients = require("../controllers/Clientes_controller");
const projects = require("../controllers/Proyectos_controller");
const herramientas_usadas = require("../controllers/herramientas_x_proyectos");
const herramientas = require("../controllers/herramientas_controller");

const users_in_more_projects = async () => {
  let usuarios = await users.get_all_usuarios();
  const resultado = [];
  let responsables_x_proyectos = await RxP.get_all_responsables_x_proyectos();
  const usuariosContador = {};
  responsables_x_proyectos.forEach((registro) => {
    if (usuariosContador[registro.id_usuario]) {
      usuariosContador[registro.id_usuario]++;
    } else {
      usuariosContador[registro.id_usuario] = 1;
    }
  });
  Object.keys(usuariosContador).forEach((id_usuario) => {
    if (usuariosContador[id_usuario] > 1) {
      usuarios.map((user) => {
        if (user.id_usuario === parseInt(id_usuario)) {
          resultado.push(user);
        }
      });
    }
  });
  return resultado;
};

const clients_with_projects = async () => {
  const clientes = await clients.get_all_Cliente();
  const proyectos = await projects.get_all_proyectos();
  const resultado = {};
  clientes.forEach((cliente) => {
    resultado[cliente.id] = { cliente, proyectos: [] };
  });
  proyectos.forEach((proyecto) => {
    resultado[proyecto.id_cliente].push(proyecto);
  });
  return resultado;
};

const herramientas_mas_usadas = async () => {
  const usedTools = await herramientas_usadas.get_all_herramientas_x_proyectos();
  const tools = await herramientas.get_all_herramientas();
  let all_tools = {};
  let resultado = {};
  tools.forEach((herramienta) => {
    all_tools[herramienta.id] = 0;
  });
  usedTools.forEach((herramienta) => {
    if (all_tools[herramienta.id_herramienta] !== undefined) {
      all_tools[herramienta.id_herramienta]++;
    }
  });
  tools.forEach((herramienta) => {
    if (all_tools[herramienta.id] >= 1) {
      resultado[herramienta.herramienta] = all_tools[herramienta.id];
    }
  });

  return resultado;
};
