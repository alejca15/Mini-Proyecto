const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('proyectos', 'thylink', 'Irknox!15', {
host: '127.0.0.1',
dialect: 'mysql',
});
module.exports = sequelize;