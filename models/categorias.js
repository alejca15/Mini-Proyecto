"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Categorias extends Model {
    static associate(models) {
      this.hasMany(models.Proyectos, { foreignKey: 'id_categoria' });
    }   
  }
  Categorias.init(
    {
      nombre_categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Categorias",
      tableName: "Categorias",
      timestamps: true,
    }
  );

  return Categorias;
};