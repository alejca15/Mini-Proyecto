"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Usuarios extends Model {
    static associate(models) {
      // Relaciones
      this.belongsToMany(models.Proyectos, {through: models.Responsables_x_proyectos,foreignKey: "id_usuario"});
      this.belongsToMany(models.Proyectos, {through: models.Calificaciones_usuarios, foreignKey: 'id_usuario' });
      this.belongsToMany(Proyectos, { through: models.Roles, foreignKey: 'id_usuario' });
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
