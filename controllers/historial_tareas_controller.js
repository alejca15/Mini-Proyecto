const { Historial_tareas } = require("../models");

//----------------------Get------------------------//
const get_all_historial_tarea = async (req, res) => {
    try {
      const historial_tareas = await Historial_tareas.findAll();
      res.status(200).json(historial_tareas);
    } catch (error) {
      console.error(error); // Imprimir error para depuración
      res.status(500).json({ error: "Error al obtener el historial de tareas." });
    }
  };
//----------------------Post------------------------//
const post_historial_tarea = async (req, res) => {
    try {
      const { id_tarea, fecha_completado } = req.body;
      const historial_tareas = await Historial_tareas.create({
        id_tarea,
        fecha_completado
      });
      res.status(201).json(historial_tareas);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el coach" });
    }
  };
//----------------------Put------------------------//
const put_historial_tarea = async (req , res) => {
    try {
     const{id}=req.params
     const  { id_tarea,fecha_completado }= req.body;
   
     const historial_tareas = await Historial_tareas.findByPk(id);
     if(!historial_tareas) return res.status(404).json({error:'Historial de tareas no encontrado'});
   
     await historial_tareas.update({id_tarea,fecha_completado});
     res.status(200).json(historial_tareas)
    } catch (error) {
      console.error(error);
     res.status(500).json({error:'error al actualizar el historial.'})
    }
     
   }
//----------------------delete------------------------//
const delete_historial_tarea = async (req , res) => {
    try {
      const{id}=req.params
  
      const historial_tareas = await Historial_tareas.findByPk(id);
      if(!historial_tareas) return res.status(404).json({error:'historial de tareas no encontrado'});
  
      await historial_tareas.destroy()
      res.status(204).send()
    } catch (error) {
      res.status(500).json({error:'error al eliminar el historial de tareas'})
    }
  }

  module.exports = { 
    get_all_historial_tarea,
    post_historial_tarea,
    put_historial_tarea,
    delete_historial_tarea
};