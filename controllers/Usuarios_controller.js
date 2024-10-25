const { Usuarios } = require("../models"); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

//----------------------Get------------------------//
const get_all_usuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error); // Imprimir error para depuración
    res.status(500).json({ error: "Error al obtener los usuarios." });
  }
};
//----------------------Post------------------------//
const post_usuario = async (req, res) => {
  try {
    const { nombre_usuario, apellido_usuario,correo} = req.body;
    const usuario = await Usuarios.create({
      nombre_usuario,
      apellido_usuario,
      correo
    });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

module.exports = { get_all_usuarios, post_usuario };
