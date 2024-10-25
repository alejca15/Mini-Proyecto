module.exports = (sequelize) => {
  class Proyectos extends Model {
    static associate(models) {}
  }
  Proyectos.init(
    {
      nombre_proyecto: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
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
