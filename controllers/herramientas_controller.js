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
        herramienta
      });
      res.status(201).json(herramientas);
    } catch (error) {
      res.status(500).json({ error: "Error al crear las herramientas" });
    }
  };
//----------------------Put------------------------//
const put_herramientas= async (req , res) => {
    try {
     const{id}=req.params
     const  { herramienta }= req.body;
   
     const herramientas= await Herramientas.findByPk(id);
     if(!herramientas) return res.status(404).json({error:'herramientas no encontradas'});
   
     await coach.update({ herramienta});
     res.status(200).json(calificacion_proyectos)
    } catch (error) {
     res.status(500).json({error:'error al actualizar las calificaciones.'})
    }
     
   }
//----------------------delete------------------------//
const delete_herramientas = async (req , res) => {
    try {
      const{id}=req.params
  
      const herramienta = await Herramientas.findByPk(id);
      if(!herramienta) return res.status(404).json({error:'herramienta no encontrada'});
  
      await herramienta.destroy()
      res.status(204).send()
    } catch (error) {
      res.status(500).json({error:'error al eliminar la herramienta.'})
    }
  }

  module.exports = { 
    get_all_herramientas,
    post_heramientas,
    put_herramientas,
    delete_herramientas
  };