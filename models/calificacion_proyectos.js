"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Calificacion_proyectos extends Model {
    static associate(models) {
      this.belongsTo(Proyectos, { foreignKey: 'id_proyecto' });
    }
  }
  Calificacion_proyectos.init(
    {
      nota: { 
        Type: DataTypes.INTEGER, 
        allowNull: false 
      },
      id_proyecto: 
      {
        Type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Proyectos",
          key: "id" 
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
