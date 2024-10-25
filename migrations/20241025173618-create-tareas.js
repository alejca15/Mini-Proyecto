"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tareas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_proyecto: {
        type: Sequelize.INTEGER,
        references: {
          model: "Proyectos",
          key: "id",
        },
      },
      nombre_tarea: {
        type: Sequelize.STRING,
      },
      descripcion_tarea: {
        type: Sequelize.STRING,
      },
      estado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tareas");
  },
};
