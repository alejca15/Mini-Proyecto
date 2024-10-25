const { Proyectos } = require("../models"); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos


//----------------------Get------------------------//
const get_all_proyectos = async (req, res) => {
    try {
      const proyectos = await Proyetos.findAll();
      res.status(200).json(proyectos);
    } catch (error) {
      console.error(error); // Imprimir error para depuración
      res.status(500).json({ error: "Error al obtener los proyectos." });
    }
  };
//----------------------Post------------------------//
const post_proyectos = async (req, res) => {
    try {
      const { nombre_proyecto, completado,progreso,fecha_inicio,fecha_entrega} = req.body;
      const proyecto = await Proyectos.create({
        nombre_proyecto,
        completado,
        progreso,
        fecha_inicio,
        fecha_entrega
      });
      res.status(201).json(proyecto);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el proyecto" });
    }
  };

//----------------------Put------------------------//
const put_proyectos= async (req , res) => {
    try {
     const{id}=req.params
     const  {nombre_proyecto, completado,progreso,fecha_inicio,fecha_entrega }= req.body;
   
     const proyecto = await Proyectos.findByPk(id);
     if(!proyecto) return res.status(404).json({error:'Proyecto no encontrado'});
   
     await proyecto.update({nombre_proyecto, completado,progreso,fecha_inicio,fecha_entrega });
     res.status(200).json(proyecto)
    } catch (error) {
     res.status(500).json({error:'error al actualizar el usuario.'})
    }
     
   }
//----------------------delete------------------------//
const delete_proyecto = async (req , res) => {
    try {
      const{id}=req.params
  
      const proyecto = await Proyectos.findByPk(id);
      if(!proyecto) return res.status(404).json({error:'Proyecto no encontrado'});
  
      await proyecto.destroy()
      res.status(204).send()
    } catch (error) {
      res.status(500).json({error:'error al eliminar el Proyecto.'})
    }
  }
 
module.exports = { 
    get_all_proyectos,
    post_proyectos,
    put_proyectos,
    delete_proyecto
};