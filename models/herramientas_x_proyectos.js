"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Herramientas_x_proyectos extends Model {
    static associate(models) {}
  }
  Herramientas_x_proyectos.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_herramienta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Herramientas",
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
      modelName: "Herramientas_x_proyectos",
      tableName:"Herramientas_x_proyectos",
      timestamps: true,
    }
  );
  return Herramientas_x_proyectos;
};
