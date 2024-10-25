const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('proyectos', 'thylink', 'Irknox!15', {
host: '192.168.100.242',
dialect: 'mysql',
});
module.exports = sequelize;