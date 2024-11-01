const { Tareas } = require("../models"); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

//----------------------Get------------------------//
const get_all_Tareas = async (req, res) => {
  try {
    const tareas = await Tareas.findAll();
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error); // Imprimir error para depuración
    res.status(500).json({ error: "Error al obtener las tareas." });
  }
};
//----------------------Post------------------------//
const post_Tareas = async (req, res) => {
  try {
    const { id_proyecto, nombre_tarea, descripcion_tarea, estado} = req.body;
    const tareas = await Tareas.create({
     id_proyecto,
     nombre_tarea,
     descripcion_tarea,
     estado
    });
    res.status(201).json(tareas);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al crear la tarea" });
  }
};



const put_Tareas= async (req , res) => {
  try {
   const{id}=req.params
   const  { id_proyecto, nombre_tarea, descripcion_tarea, estado }= req.body;
 
   const tareas = await Tareas.findByPk(id);
   if(!tareas) return res.status(404).json({error:'Tarea no encontrado'});
 
   await tareas.update({id_proyecto, nombre_tarea, descripcion_tarea, estado });
   res.status(200).json(tareas)
  } catch (error) {
   res.status(500).json({error:'error al actualizar la tarea.'})
  }
   
 }
 
 const delete_Tareas = async (req , res) => {
   try {
     const{id}=req.params
 
     const tareas = await Tareas.findByPk(id);
     if(!tareas) return res.status(404).json({error:'tarea no encontrada'});
 
     await tareas.destroy()
     res.status(204).send()
   } catch (error) {
     res.status(500).json({error:'error al eliminar la Tarea.'})
   }
 }

module.exports = { get_all_Tareas, post_Tareas, put_Tareas, delete_Tareas};