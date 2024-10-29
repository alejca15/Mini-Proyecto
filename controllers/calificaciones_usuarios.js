const { Calificaciones_usuarios } = require("../models"); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos


//----------------------Get------------------------//
const get_all_calificaciones_usuarios = async (req, res) => {
    try {
      const calificaciones_usuarios = await Calificaciones_usuarios.findAll();
      res.status(200).json(calificaciones_usuarios);
    } catch (error) {
      console.error(error); // Imprimir error para depuración
      res.status(500).json({ error: "Error al obtener los proyectos." });
    }
  };
//----------------------Post------------------------//
const post_calificaciones_usuarios = async (req, res) => {
    try {
      const { id_usuario, id_proyecto} = req.body;
      const calificaciones_usuarios = await Calificaciones_usuarios.create({
        id_usuario,
        id_proyecto,
      });
      res.status(201).json(calificaciones_usuarios);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el proyecto" });
    }
  };

//----------------------Put------------------------//
const put_calificaciones_usuarios = async (req , res) => {
    try {
     const{id}=req.params
     const  {id_usuario, id_proyecto}= req.body;
   
     const calificaciones_usuarios = await Calificaciones_usuarios.findByPk(id);
     if(!calificaciones_usuarios) return res.status(404).json({error:'Proyecto no encontrado'});
   
     await calificaciones_usuarios.update({nombre_proyecto, completado,progreso,fecha_inicio,fecha_entrega,id_cliente,id_coach,id_categoria });
     res.status(200).json(proyecto)
    } catch (error) {
     res.status(500).json({error:'error al actualizar el usuario.'})
    }
     
   }
//----------------------delete------------------------//
const delete_calificaciones_usuarios = async (req , res) => {
    try {
      const{id}=req.params
  
      const calificaciones_usuarios = await Calificaciones_usuarios.findByPk(id);
      if(!calificaciones_usuarios) return res.status(404).json({error:'Proyecto no encontrado'});
  
      await calificaciones_usuarios.destroy()
      res.status(204).send()
    } catch (error) {
      res.status(500).json({error:'error al eliminar el Proyecto.'})
    }
  }
 
module.exports = { 
    get_all_calificaciones_usuarios,
    post_calificaciones_usuarios,
    put_calificaciones_usuarios,
    delete_calificaciones_usuarios
};