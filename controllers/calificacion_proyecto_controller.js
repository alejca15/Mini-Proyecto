const { Calificacion_proyectos } = require("../models");

//----------------------Get------------------------//
const get_all_calificacion_proyecto = async (req, res) => {
    try {
      const calificacion_proyectos = await Calificacion_proyectos.findAll();
      res.status(200).json(calificacion_proyectos);
    } catch (error) {
      console.error(error); // Imprimir error para depuración
      res.status(500).json({ error: "Error al obtener las calificaciones de los proyectos." });
    }
  };
//----------------------Post------------------------//
const post_calificacion_proyecto = async (req, res) => {
  try {
    const { nota, id_proyecto } = req.body;
    const calificacion_proyectos = await Calificacion_proyectos.create({
      nota, 
      id_proyecto 
    });
    res.status(201).json(calificacion_proyectos);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ error: "Error al crear las calificaciones" });
  }
};
//----------------------Put------------------------//
const put_calificacion_proyecto= async (req , res) => {
  try {
   const{id}=req.params
   const  { nota, id_proyecto }= req.body;
 
   const calificacion_proyectos = await Calificacion_proyectos.findByPk(id);
   if(!calificacion_proyectos) return res.status(404).json({error:'calificaciones no encontradas'});
 
   await calificacion_proyectos.update({ nota, id_proyecto});
   res.status(200).json(calificacion_proyectos)
  } catch (error) {
    console.error(error);
  
   res.status(500).json({error:'error al actualizar las calificaciones.'})
  }
   
 }
//----------------------delete------------------------//
const delete_calificaciones_proyecto= async (req , res) => {
  try {
    const{id}=req.params

    const calificacion_proyectos= await Calificacion_proyectos.findByPk(id);
    if(!calificacion_proyectos) return res.status(404).json({error:'calificacion no encontrada'});

    await calificacion_proyectos.destroy()
    res.status(204).send()
  } catch (error) {
    res.status(500).json({error:'error al eliminar la calificacion.'})
  }
}
module.exports = { 
  get_all_calificacion_proyecto,
  post_calificacion_proyecto,
  put_calificacion_proyecto,
  delete_calificaciones_proyecto
};