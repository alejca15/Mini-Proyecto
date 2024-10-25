"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Responsables_x_proyectos extends Model {
    static associate(models) {
      Responsables_x_proyectos.belongsTo(models.Clientes, {
        foreignkey: "id_usuario",
        as: "Usuarios",
      }),
      Responsables_x_proyectos.belongsTo(models.Clientes, {
        foreignkey: "id_proyecto",
        as: "Proyectos",
      });
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
      modelName: "Responsablesxproyectos",
      tableName: "Responsablesxproyectos",
    }
  );
  return Responsables_x_proyectos;
};
