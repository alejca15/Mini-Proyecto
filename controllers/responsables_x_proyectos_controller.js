const { Responsables_x_proyectos } = require("../models");
// const { post_proyectos } = require("./Proyectos_controller");

//----------------------Get------------------------//
const get_all_responsables_x_proyectos = async (req, res) => {
    try {
      const responsable_x_proyecto = await Responsables_x_proyectos.findAll();
      res.status(200).json(responsable_x_proyecto);
    } catch (error) {
      console.error(error); // Imprimir error para depuración
      res.status(500).json({ error: "Error al obtener los Responsable_x_proyecto." });
    }
  };
  //----------------------Post------------------------//
  const post_responsables_x_proyectos = async (req, res) => {
    try {
      const { id_usuario, id_proyecto } = req.body;
      const responsables_x_proyectos = await Responsables_x_proyectos.create({
        id_usuario,
        id_proyecto
      });
      res.status(201).json(responsables_x_proyectos);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el Responsables_x_proyectos" });
    }
  };
//----------------------Put------------------------//
const put_responsables_x_proyectos= async (req , res) => {
    try {
     const{id}=req.params
     const  { id_usuario, id_proyecto  }= req.body;
   
     const responsables_x_proyectos = await Responsables_x_proyectos.findByPk(id);
     if(!responsables_x_proyectos) return res.status(404).json({error:'Responsables_x_proyectos no encontrado'});
   
     await  responsables_x_proyectos.update({ id_usuario, id_proyecto  });
     res.status(200).json( responsables_x_proyectos)
    } catch (error) {
     res.status(500).json({error:'error al actualizar el usuario.'})
    }
     
   }
//----------------------delete------------------------//
const delete_responsables_x_proyectos = async (req , res) => {
    try {
      const{id}=req.params
  
      const responsables_x_proyectos = await Responsables_x_proyectos.findByPk(id);
      if(!responsables_x_proyectos) return res.status(404).json({error:'Responsables_x_proyectos no encontrado'});
  
      await responsables_x_proyectos.destroy()
      res.status(204).send()
    } catch (error) {
      res.status(500).json({error:'error al eliminar el responsables_x_proyectos.'})
    }
  }

module.exports = { 
    get_all_responsables_x_proyectos,
    post_responsables_x_proyectos,
    put_responsables_x_proyectos,
    delete_responsables_x_proyectos
};