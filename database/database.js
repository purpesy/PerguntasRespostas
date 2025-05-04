const Sequelize = require('sequelize');

const connection = new Sequelize('db_perguntas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;