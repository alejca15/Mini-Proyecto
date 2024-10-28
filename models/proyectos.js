const { Model, DataTypes } = require("sequelize");
const categorias = require("./categorias");

module.exports = (sequelize) => {
  class Proyectos extends Model {
    static associate(models) {
      // Relación muchos a muchos con Usuarios a través de ResponsablesProyecto
      this.belongsToMany(models.Usuarios, {
        through: "ResponsablesProyecto",
        foreignKey: "id_proyecto",
        otherKey: "id_usuario",
      });

      // Relación uno a muchos con Tareas
      this.hasMany(models.Tareas, { foreignKey: "id_proyecto" });
      this.belongsTo(models.Clientes, { foreignKey: "id_cliente" });
      this.belongsTo(models.Categorias, { foreignKey: "id_categoria" });
      this.belongsTo(models.Coach, { foreignKey: "id_coach" });
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
      id_coach:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Coach",
          key: "id",
        },
      },
      id_categoria:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Categorias",
          key: "id",
        },
      }
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
