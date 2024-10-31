"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Responsables_x_proyectos extends Model {
    static associate(models) {
      
    }
  }

  Responsables_x_proyectos.init(
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Usuarios",
          key: "id",
        },
      },
      id_proyecto: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
          model: "Proyectos",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Responsables_x_proyectos",
      tableName: "Responsables_x_proyectos",
    }
  );

  return Responsables_x_proyectos;
};
