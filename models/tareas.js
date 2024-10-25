"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Tareas extends Model {
    static associate(models) {
      Tareas.belongsTo(models.Proyectos, {
        foreignkey: "id_proyecto",
        as: "Proyectos",
      });
    }
  }
  Tareas.init(
    {
      id_proyecto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Proyectos",
          key: "id",
        },
      },
      nombre_tarea: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion_tarea: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Tareas",
      tableName: "Tareas",
      timestamps: true,
    }
  );

  return Tareas;
};
