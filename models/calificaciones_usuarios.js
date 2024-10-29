"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Calificaciones_usuarios extends Model {
    static associate(models) {}
  }
  Calificaciones_usuarios.init(
    {
      id_usuario: {
        Type: DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:"Usuarios",
          key:"id"
        }
      },
      id_proyecto: {
        Type: DataTypes.INTEGER,
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
