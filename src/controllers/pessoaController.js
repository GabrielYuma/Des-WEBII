
const Pessoas = require("../models/Pessoa");

module.exports = {
 async get(request, response) {
    const { cpf } = request.params;
    try {
      const res = await Pessoas.findOne({
        cpf
      })
      return response.json(res)
    } catch (error) {
      console.log('Erro get Pessoas')
      return response.json(400)
    }
  },

  async post(request, response) {
    const { nome, cpf, dtNasc, telefone, grupoPri, endPessoa, emailPessoa } = request.body;
    try {
      const res = await Pessoas.create({
        nome, cpf, dtNasc, telefone, grupoPri, endPessoa, emailPessoa
      })
      return response.json(res);
    } catch (error) {
      console.log('Erro post Pessoas');
      return response.json(400);
    }
  },

 async delete(request, response) {
    const { _id } = request.body;
    try {
      const res = await Pessoas.findByIdAndDelete({
        _id
      })
      return response.json('Usuario deletado')
    } catch (error) {
      console.log('Erro delete Pessoas')
      return response.json(400)
    }
  },

 async put(request, response) {
    const { _id, nome, cpf, dtNasc, telefone, grupoPri, endPessoa, emailPessoa } = request.body;
    try {
      const res = await Pessoas.findByIdAndUpdate({ _id }, {
        nome, cpf, dtNasc, telefone, grupoPri, endPessoa, emailPessoa
      }, { new: true })
      return response.json(res);
    } catch (error) {
      console.log('Erro put Pessoas');
      return response.json(400);
    }
  },
};
