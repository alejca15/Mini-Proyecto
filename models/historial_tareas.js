"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Historial_tareas extends Model {
    static associate(models) {
      this.belongsTo(Tareas, { foreignKey: 'id_tarea' });
    }
  }
  Historial_tareas.init(
    {
      id_tarea: {
        type: DataTypes.STRING,
        allowNull: false,
        references:{
          model: "Tareas",
          key: "id",
        }
      },
      fecha_completado: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Historial_tareas",
      tableName: "Historial_tareas",
      timestamps: true,
    }
  );

  return Historial_tareas;
};
