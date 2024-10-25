"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Roles extends Model {
    static associate(models) {
      // Relación uno a uno con Usuarios
      this.belongsTo(models.Usuarios, { foreignKey: 'id_usuario' });
    }
  }
  Roles.init(
    {
      id_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        references:{
          model: "Usuarios",
          key: "id",
        }
      },
      id_proyecto: {
        type: DataTypes.STRING,
        allowNull: false,
        references:{
          model:"Proyectos",
          key:"id"
        }
      },
      Rol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Roles",
      tableName: "Roles",
      timestamps: true,
    }
  );

  return Roles;
};
