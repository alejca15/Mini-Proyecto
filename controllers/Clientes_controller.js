const { Clientes } = require("../models"); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

//----------------------Get------------------------//
const get_all_Cliente = async (req, res) => {
  try {
    const cliente = await Clientes.findAll();
    res.status(200).json(cliente);
  } catch (error) {
    console.error(error); // Imprimir error para depuración
    res.status(500).json({ error: "Error al obtener los Clientes." });
  }
};
//----------------------Post------------------------//
const post_Cliente = async (req, res) => {
  try {
    const { nombre_cliente , apellido_cliente , correo_cliente} = req.body;
    const cliente = await Clientes.create({
    nombre_cliente,
    apellido_cliente,
    correo_cliente
    });
    res.status(201).json(cliente);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ error: "Error al crear al cliente" });
  }
};



const put_Cliente= async (req , res) => {
  try {
   const{id}=req.params
   const  {  nombre_cliente , apellido_cliente , correo_cliente }= req.body;
 
   const cliente = await Clientes.findByPk(id);
   if(!cliente) return res.status(404).json({error:'cliente no encontrado'});
 
   await cliente.update({ nombre_cliente , apellido_cliente , correo_cliente });
   res.status(200).json(cliente)
  } catch (error) {
   res.status(500).json({error:'error al actualizar al cliente.'})
  }
   
 }
 
 const delete_Cliente = async (req , res) => {
   try {
     const{id}=req.params
 
     const cliente = await Clientes.findByPk(id);
     if(!cliente) return res.status(404).json({error:'Cliente no encontrado'});
 
     await cliente.destroy()
     res.status(204).send()
   } catch (error) {
     res.status(500).json({error:'error al eliminar al cliente.'})
   }
 }

module.exports = { get_all_Cliente, post_Cliente, put_Cliente, delete_Cliente};