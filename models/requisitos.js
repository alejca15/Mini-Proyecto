"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Requisitos extends Model {
    static associate(models) {
      Requisitos.belongsTo(Proyectos, { foreignKey: "id_proyecto" });
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
