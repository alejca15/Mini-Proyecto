"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Usuarios extends Model {
    static associate(models) {
      Usuarios.hasMany(Rol, {
        foreignKey: "id_usuario",
        as: "Usuarios",
      });
    }
  }
  Usuarios.init(
    {
      nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Usuarios",
      tableName: "Usuarios",
      timestamps: true,
    }
  );

  return Usuarios;
};
