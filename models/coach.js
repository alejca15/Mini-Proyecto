"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Coach extends Model {
    static associate(models) {
      // Relación uno a muchos con Proyectos
      this.hasMany(models.Proyectos, {foreignKey: "id_coach"});
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
        unique:true
      },
    },
    {
      sequelize,
      modelName: "Coach",
      tableName: "Coach",
      timestamps: true,
    }
  );
  return Coach;
};
