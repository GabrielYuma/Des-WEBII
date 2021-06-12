const Sequelize = require('../bd/postgres').Sequelize;
const postgres = require('../bd/postgres').sequelize;

const PessoasModel = postgres.define('Pessoas', {
    idPessoas: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomePessoa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpfPessoa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nascPessoa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telPessoa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    grupoPessoa: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    endPessoa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    emailPessoa:{
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = PessoasModel;