const Sequelize = require('sequelize');
const connection = require('./database');
const { FORCE } = require('sequelize/lib/index-hints');

const Pergunta = connection.define('tbl_perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {
    console.log("Tabela Pergunta criada com sucesso!");
})

module.exports = Pergunta;