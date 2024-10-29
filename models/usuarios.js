"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Usuarios extends Model {
    static associate(models) {
      // Relación uno a uno con Rol
      this.hasOne(models.Roles, { foreignKey: "id_usuario" });
      // Relación muchos a muchos con Proyectos a través de ResponsablesProyecto
      this.belongsToMany(models.Proyectos, {
        through: models.Responsables_x_proyectos,
        foreignKey: "id_usuario",
        otherKey: "id_proyecto",
      });
      Usuarios.belongsToMany(models.Proyectos, { through: models.Calificaciones_usuarios, foreignKey: 'id_usuario' });
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
