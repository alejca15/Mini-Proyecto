"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Comentarios extends Model {
    static associate(models) {
      Comentarios.belongsTo(models.Tareas, { foreignKey: "id_tarea" });
    }
  }
  Comentarios.init(
    {
      id_tarea: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model:"tareas",
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
      modelName: "Comentarios",
      tableName: "Comentarios",
      timestamps: true,
    }
  );
  return Comentarios;
};
