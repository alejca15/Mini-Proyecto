const { Requisitos } = require("../models");

//----------------------Get------------------------//
const get_all_requisitos = async (req, res) => {
    try {
      const requisitos = await Requisitos.findAll();
      res.status(200).json(requisitos);
    } catch (error) {
      console.error(error); // Imprimir error para depuración
      res.status(500).json({ error: "Error al obtener los requisitos." });
    }
  };

  const post_requisitos = async (req, res) => {
    try {
      const { id_proyecto, requisito } = req.body;
      const requisitos = await Requisitos.create({
        id_proyecto,
        requisito
      });
      res.status(201).json(requisitos);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el requisitos" });
    }
  };
//----------------------Put------------------------//
const put_requisitos = async (req , res) => {
    try {
     const{id}=req.params
     const  { id_proyecto, requisito }= req.body;
   
     const requisitos = await Requisitos.findByPk(id);
     if(!requisitos) return res.status(404).json({error:'Requisitos no encontrados'});
   
     await requisitos.update({id_proyecto, requisito});
     res.status(200).json(requisitos)
    } catch (error) {
     res.status(500).json({error:'error al actualizar los Requisitos.'})
    }
     
   }
//----------------------delete------------------------//
const delete_requisitos= async (req , res) => {
    try {
      const{id}=req.params
  
      const requisitos = await Requisitos.findByPk(id);
      if(!requisitos) return res.status(404).json({error:'requisitos no encontrado'});
  
      await requisitos.destroy()
      res.status(204).send()
    } catch (error) {
      res.status(500).json({error:'error al eliminar los requisitos'})
    }
  }

  module.exports = { 
    get_all_requisitos,
    post_requisitos,
    put_requisitos,
    delete_requisitos
};