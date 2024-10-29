"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Herramientas extends Model {
    static associate(models) {
      Herramientas.belongsToMany(Proyectos, {
        through: HerramientasxProyectos,
        foreignKey: "id_herramientas",
      });
    }
  }
  Herramientas.init(
    {
      herramienta: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Herramientas",
      tableName: "Herramientas",
      timestamps: true,
    }
  );
  return Herramientas;
};
