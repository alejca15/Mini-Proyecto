"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Clientes extends Model {
    static associate(models) {
      this.hasMany(Proyectos, { foreignKey: 'id_cliente' });
    }   
  }
  Clientes.init(
    {
      nombre_cliente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido_cliente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo_cliente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Clientes",
      tableName: "Clientes",
      timestamps: true,
    }
  );

  return Usuarios;
};
