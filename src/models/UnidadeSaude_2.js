const Sequelize = require('../db/postgres').Sequelize;
const postgres = require('../db/postgres').sequelize;

const UnidadeModel = postgres.define('Unidade', {
    idUnidade: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeUnidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    desUnidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endUnidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telUnidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailUnidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    latlongUnidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = UnidadeModel;