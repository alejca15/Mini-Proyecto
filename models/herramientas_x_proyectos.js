"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class herramientas_x_proyectos extends Model {
    static associate(models) {}
  }
  herramientas_x_proyectos.init(
    {
      id_herramienta: {
        Type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Herramientas",
          key: "id",
        },
      },
      id_proyecto: {
        Type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Proyectos",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "herramientas_x_proyectos",
      tableName:"herramientas_x_proyectos",
      timestamps: true,
    }
  );
  return herramientas_x_proyectos;
};
