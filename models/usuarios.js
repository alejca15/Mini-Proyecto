"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Usuarios extends Model {
    static associate(models) {
      // Relaciones
      this.belongsToMany(models.Proyectos, {through: models.Responsables_x_proyectos,foreignKey: "id_usuario", as: "ProyectosResponsables" });
      this.belongsToMany(models.Proyectos, {through: models.Calificaciones_usuarios, foreignKey: 'id_usuario', as: "ProyectosCalificaciones" });
      this.belongsToMany(models.Proyectos, { through: models.Roles, foreignKey: 'id_usuario' });
    }   
  }
  Usuarios.init(
    {
      nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contra_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol: {
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
