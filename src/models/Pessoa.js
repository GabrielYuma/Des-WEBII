const mongoose = require('mongoose');

const PessoasSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    dtNasc: String,
    telefone: String,
    grupoPri: Boolean,
    endPessoa: String,
    emailPessoa: String
})

module.exports = mongoose.model('Pessoas', PessoasSchema);