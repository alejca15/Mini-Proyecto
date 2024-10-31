"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Herramientas extends Model {
    static associate(models) {
     Herramientas.belongsToMany(models.Proyectos, {
        through: models.Herramientas_x_proyectos, 
        foreignKey: "id_herramienta", 
        otherKey: "id_proyecto",
        as: "Proyectos"
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
