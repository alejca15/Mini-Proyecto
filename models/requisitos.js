"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Requisitos extends Model {
    static associate(models) {
      Requisitos.belongsTo(models.Proyectos, { foreignKey: "id_proyecto" });
    }
  }
  Requisitos.init(
    {
      id_proyecto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model:"Proyectos",
          key:"id"
        }
      },
      comentario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Requisitos",
      tableName: "Requisitos",
      timestamps: true,
    }
  );
  return Requisitos;
};
