const { Roles } = require("../models"); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

//----------------------Get------------------------//
const get_all_Roles = async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.status(200).json(roles);
  } catch (error) {
    console.error(error); // Imprimir error para depuración
    res.status(500).json({ error: "Error al obtener los Roles." });
  }
};
//----------------------Post------------------------//
const post_Roles = async (req, res) => {
  try {
    const { id_usuario, id_proyecto , rol} = req.body;
    const roles = await Roles.create({
      id_usuario,
      id_proyecto,
      rol
    });
    res.status(201).json(roles);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el rol" });
  }
};



const put_Roles= async (req , res) => {
  try {
   const{id}=req.params
   const  { id_usuario, id_proyecto , rol }= req.body;
 
   const roles = await Roles.findByPk(id);
   if(!roles) return res.status(404).json({error:'Roles no encontrado'});
 
   await roles.update({ id_usuario, id_proyecto , rol });
   res.status(200).json(roles)
  } catch (error) {
   res.status(500).json({error:'error al actualizar el Rol.'})
  }
   
 }
 
 const delete_Roles = async (req , res) => {
   try {
     const{id}=req.params
 
     const roles = await Roles.findByPk(id);
     if(!roles) return res.status(404).json({error:'usuario no encontrado'});
 
     await roles.destroy()
     res.status(204).send()
   } catch (error) {
     res.status(500).json({error:'error al eliminar el Rol.'})
   }
 }

module.exports = { get_all_Roles, post_Roles, put_Roles, delete_Roles};