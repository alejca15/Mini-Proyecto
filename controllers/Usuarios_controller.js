const { Usuarios } = require("../models"); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

//----------------------Get------------------------//
const get_all_usuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error); // Imprimir error para depuración
    res.status(500).json({ error: "Error al obtener los usuarios." });
  }
};
//----------------------Post------------------------//
const post_usuario = async (req, res) => {
  try {
    const { nombre_usuario, apellido_usuario,correo} = req.body;
    const usuario = await Usuarios.create({
      nombre_usuario,
      apellido_usuario,
      correo
    });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};



const put_Usuario= async (req , res) => {
  try {
   const{id}=req.params
   const  {nombre_usuario, apellido_usuario,correo }= req.body;
 
   const usuarios = await Usuarios.findByPk(id);
   if(!usuarios) return res.status(404).json({error:'Usuario no encontrado'});
 
   await usuarios.update({nombre_usuario, apellido_usuario,correo });
   res.status(200).json(usuarios)
  } catch (error) {
   res.status(500).json({error:'error al actualizar el usuario.'})
  }
   
 }
 
 const delete_Usuario = async (req , res) => {
   try {
     const{id}=req.params
 
     const usuarios = await Usuarios.findByPk(id);
     if(!usuarios) return res.status(404).json({error:'usuario no encontrado'});
 
     await usuarios.destroy()
     res.status(204).send()
   } catch (error) {
     res.status(500).json({error:'error al eliminar el Usuario.'})
   }
 }

module.exports = { get_all_usuarios, post_usuario, put_Usuario, delete_Usuario};
