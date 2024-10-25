'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Proyectos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_proyecto: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false,
      },
      completado: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
        allowNull: false,
      },
      progreso: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        allowNull: false,
      },
      fecha_inicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fecha_de_entrega: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Proyectos');
  }
};