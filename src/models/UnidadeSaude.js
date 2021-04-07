const mongoose = require('mongoose');

const UnidadeSaude = new mongoose.Schema({
    nome: String,
    descricao: String,
    endUnidade: String,
    telefone: String,
    email: String,
    latLong: String
})

module.exports = mongoose.model('Unidade', UnidadeSaude);