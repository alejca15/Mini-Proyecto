const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Proyectos extends Model {
    static associate(models) {
      // Relaciones uno a muchos
      this.hasMany(models.Tareas, { foreignKey: "id_proyecto" });
      this.hasMany(models.Roles, { foreignKey: "id_proyecto", as: "ProyectoRoles" }); 
      this.hasMany(models.Requisitos, { foreignKey: "id_proyecto" });
      this.hasMany(models.Calificacion_proyectos, { foreignKey: "id_proyecto" });

      // Relaciones uno a muchos con Clientes, Categorías y Coach
      this.belongsTo(models.Clientes, { foreignKey: "id_cliente" });
      this.belongsTo(models.Categorias, { foreignKey: "id_categoria" });
      this.belongsTo(models.Coach, { foreignKey: "id_coach" });

      // Relaciones de muchos a muchos con Usuarios y Herramientas

      this.belongsToMany(models.Usuarios, { through: models.Responsables_x_proyectos, foreignKey: "id_proyecto", otherKey: "id_usuario", as: "UsuariosResponsables"});
      this.belongsToMany(models.Herramientas, { through: models.Herramientas_x_proyectos, foreignKey: "id_proyecto",otherKey: "id_herramienta", as: "Herramientas"});

      this.belongsToMany(models.Usuarios, { through: models.Calificaciones_usuarios, foreignKey: "id_proyecto" });

      // Alias único para esta relación belongsToMany con Roles
      this.belongsToMany(models.Usuarios, { through: models.Roles, as: "UsuariosRoles", foreignKey: "id_proyecto" });
    }
  }

  Proyectos.init(
    {
      nombre_proyecto: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      completado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      progreso: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fecha_de_entrega: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Clientes",
          key: "id",
        },
      },
      id_coach: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Coach",
          key: "id",
        },
      },
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Categorias",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Proyectos",
      tableName: "Proyectos",
      timestamps: true,
    }
  );

  return Proyectos;
};
