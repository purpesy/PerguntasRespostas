const Sequelize = require('sequelize');
const connection = require('./database');
const { FORCE } = require('sequelize/lib/index-hints');

const Resposta = connection.define('tbl_respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({force: false}).then(() => {
    console.log("Tabela Resposta criada com sucesso!");
})

module.exports = Resposta;