const mongoose = require('mongoose');

const Agendamento = new mongoose.Schema({
    idUnidadeSaude: String,
    idPessoa: String,
    dtAgendamento: String,
    necEspeciais: Boolean,
    obsAgendamento: String
})

module.exports = mongoose.model('Agendamento', Agendamento);