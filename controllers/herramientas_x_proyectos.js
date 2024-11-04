const { Herramientas_x_proyectos } = require("../models");

//----------------------Get------------------------//
const get_all_herramientas_x_proyectos = async (req, res) => {
    try {
      const herramientas_x_proyectos = await Herramientas_x_proyectos.findAll();
      res.status(200).json(herramientas_x_proyectos);
    } catch (error) {
      console.error(error); // Imprimir error para depuración
      res.status(500).json({ error: "Error al obtener el responsables_x_proyectos." });
    }
  };
//----------------------Post------------------------//
const post_herramientas_x_proyectos = async (req, res) => {
    try {
      const { id_herramienta, id_proyecto } = req.body;
      const herramientas_x_proyectos = await Herramientas_x_proyectos.create({
        id_herramienta,
        id_proyecto
      });
      res.status(201).json(herramientas_x_proyectos);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el responsables_x_proyectos" });
    }
  };
//----------------------Put------------------------//
const put_herramientas_x_proyectos = async (req , res) => {
    try {
     const{id}=req.params
     const  { id_herramienta,id_proyecto }= req.body;
   
     const herramientas_x_proyectos = await Herramientas_x_proyectos.findByPk(id);
     if(!herramientas_x_proyectos) return res.status(404).json({error:'Historial de tareas no encontrado'});
   
     await herramientas_x_proyectos.update({id_herramienta,id_proyecto});
     res.status(200).json(coach)
    } catch (error) {
     res.status(500).json({error:'error al actualizar el historial.'})
    }
     
   }
//----------------------delete------------------------//
const delete_herramientas_x_proyectos = async (req , res) => {
    try {
      const{id}=req.params
  
      const herramientas_x_proyectos = await Herramientas_x_proyectos.findByPk(id);
      if(!herramientas_x_proyectos) return res.status(404).json({error:'responsables_x_proyectos no encontrado'});
  
      await herramientas_x_proyectos.destroy()
      res.status(204).send()
    } catch (error) {
      res.status(500).json({error:'error al eliminar el responsables_x_proyectos'})
    }
  }

  module.exports = { 
    get_all_herramientas_x_proyectos,
    post_herramientas_x_proyectos,
    put_herramientas_x_proyectos,
    delete_herramientas_x_proyectos
};