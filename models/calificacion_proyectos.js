"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Calificacion_proyectos extends Model {
    static associate(models) {
      this.belongsTo(models.Proyectos, { foreignKey: "id_proyecto" });
    }
  }
  Calificacion_proyectos.init(
    {
      nota: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      modelName: "Calificacion_proyectos",
      tableName: "Calificacion_proyectos",
      timestamps: true,
    }
  );
  return Calificacion_proyectos;
};
