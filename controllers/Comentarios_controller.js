const { Comentarios } = require("../models"); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

//----------------------Get------------------------//
const get_all_Comentarios = async (req, res) => {
  try {
    const comentario = await Comentarios.findAll();
    res.status(200).json(comentario);
  } catch (error) {
    console.error(error); // Imprimir error para depuración
    res.status(500).json({ error: "Error al obtener los comentarios." });
  }
};
//----------------------Post------------------------//
const post_Comentarios = async (req, res) => {
  try {
    const { id_tarea, comentario, fecha_hora } = req.body;
    const comentario_agregado = await Comentarios.create({
      id_tarea,
      comentario,
      fecha_hora,
    });
    res.status(201).json(comentario_agregado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el comentario" });
  }
};

const put_Comentarios = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_tarea, comentario, fecha_Hora_Comentario } = req.body;

    const comentario_guardado = await Comentarios.findByPk(id);
    if (!comentario_guardado)
      return res.status(404).json({ error: "categoria no encontrada" });

    await comentario_guardado.update({
      id_tarea,
      comentario,
      fecha_Hora_Comentario,
    });
    res.status(200).json(comentario_guardado);
  } catch (error) {
    res.status(500).json({ error: "error al actualizar el comentario." });
  }
};

const delete_Comentarios = async (req, res) => {
  try {
    const { id } = req.params;

    const comentario = await Comentarios.findByPk(id);
    if (!comentario)
      return res.status(404).json({ error: "comentario no encontrado" });

    await comentario.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "error al eliminar el comentario." });
  }
};

module.exports = {
  get_all_Comentarios,
  post_Comentarios,
  put_Comentarios,
  delete_Comentarios,
};
