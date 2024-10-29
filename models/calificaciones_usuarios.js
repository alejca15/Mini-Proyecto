"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Calificaciones_usuarios extends Model {
    static associate(models) {}
  }
  Calificaciones_usuarios.init(
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:"Usuarios",
          key:"id"
        }
      },
      id_proyecto: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:"Proyectos",
          key:"id"
        }
      },
    },
    {
      sequelize,
      modelName: "Calificaciones_usuarios",
      tableName:"Calificaciones_usuarios",
      timestamps: true,
    }
  );
  return Calificaciones_usuarios;
};
