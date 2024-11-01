const { Herramientas } = require("../models");

//----------------------Get------------------------//
const get_all_herramientas = async (req, res) => {
  try {
    const herramientas = await Herramientas.findAll();
    res.status(200).json(herramientas);
  } catch (error) {
    console.error(error); // Imprimir error para depuración
    res.status(500).json({ error: "Error al obtener las herramientas." });
  }
};
//----------------------Post------------------------//
const post_heramientas = async (req, res) => {
  try {
    const { herramienta } = req.body;
    const herramientas = await Herramientas.create({
      herramienta,
    });
    res.status(201).json(herramientas);
  } catch (error) {
    res.status(500).json({ error: "Error al crear las herramientas" });
  }
};
//----------------------Put------------------------//
const put_herramientas = async (req, res) => {
  try {
    const { id } = req.params;
    const { herramienta } = req.body;

    const herramientas = await Herramientas.findByPk(id);
    if (!herramientas)
      return res.status(404).json({ error: "Herramienta no encontrada" });

    await Herramientas.update({ herramienta }, { where: { id } });

    const herramientaActualizada = await Herramientas.findByPk(id);

    res.status(200).json(herramientaActualizada);
  } catch (error) {
    console.error(error); // Agregar log para depuración
    res.status(500).json({ error: "Error al actualizar la herramienta." });
  }
};

//----------------------delete------------------------//
const delete_herramientas = async (req, res) => {
  try {
    const { id } = req.params;

    const herramienta = await Herramientas.findByPk(id);
    if (!herramienta)
      return res.status(404).json({ error: "herramienta no encontrada" });

    await herramienta.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "error al eliminar la herramienta." });
  }
};

module.exports = {
  get_all_herramientas,
  post_heramientas,
  put_herramientas,
  delete_herramientas,
};
