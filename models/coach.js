"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Coach extends Model {
    static associate(models) {
      // Relación uno a muchos con Proyectos
      this.hasMany(models.Proyectos, {
        foreignKey: "id_coach",
        as: "Proyectos",
      });
    }
  }
  Coach.init(
    {
      nombre_coach: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido_coach: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo_coach: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Coach",
      tableName: "Coaches",
      timestamps: true,
    }
  );
  return Coach;
};
