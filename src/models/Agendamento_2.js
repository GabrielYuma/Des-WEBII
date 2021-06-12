const Sequelize = require('../bd/postgres').Sequelize;
const postgres = require('../bd/postgres').sequelize;

const AgendamentoModel = postgres.define('Agendamento', {

    idAgendamento: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dtAgendamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    necEspeciais: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    obsAgendamento: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = AgendamentoModel;