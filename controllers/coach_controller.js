const { Coach } = require("../models");

//----------------------Get------------------------//
const get_all_coach = async (req, res) => {
    try {
      const coach = await Coach.findAll();
      res.status(200).json(coach);
    } catch (error) {
      console.error(error); // Imprimir error para depuración
      res.status(500).json({ error: "Error al obtener los Coachs." });
    }
  };
//----------------------Post------------------------//
const post_coach = async (req, res) => {
    try {
      const { nombre_coach,apellido_coach,correo_coach } = req.body;
      const coach = await Coach.create({
        nombre_coach,
        apellido_coach,
        correo_coach
      });
      res.status(201).json(coach);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el coach" });
    }
  };
//----------------------Put------------------------//
const put_coach= async (req , res) => {
    try {
     const{id}=req.params
     const  { nombre_coach,apellido_coach,correo_coach }= req.body;
   
     const coach = await Coach.findByPk(id);
     if(!coach) return res.status(404).json({error:'Coach no encontrado'});
   
     await proyecto.update({nombre_coach,apellido_coach,correo_coach});
     res.status(200).json(coach)
    } catch (error) {
     res.status(500).json({error:'error al actualizar el coach.'})
    }
     
   }
//----------------------delete------------------------//
const delete_coach = async (req , res) => {
    try {
      const{id}=req.params
  
      const coach = await Coach.findByPk(id);
      if(!coach) return res.status(404).json({error:'coach no encontrado'});
  
      await coach.destroy()
      res.status(204).send()
    } catch (error) {
      res.status(500).json({error:'error al eliminar el coach.'})
    }
  }

  module.exports = { 
    get_all_coach,
    post_coach,
    put_coach,
    delete_coach
};