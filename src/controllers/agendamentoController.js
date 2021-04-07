const Agendamento = require("../models/Agendamento");
//const Pessoas = require("../dados/pessoas");
//const Unidades = require("../dados/unidades");

module.exports = {
  async get(request, response) {
    const { idPessoa } = request.params;
    try {
      const res = await Agendamento.find({
        idPessoa:idPessoa        
      }).exec()
      console.log(res)
      return response.json(res)
    } catch (error) {
      console.log('Erro get Agendamento')
      return response.json(400)
    }
  },

    async post(request, response) {
      const { idUnidadeSaude, idPessoa, dtAgendamento, necEspeciais, obsAgendamento } = request.body;
      try {
        const res = await Agendamento.create({
          idUnidadeSaude, idPessoa, dtAgendamento, necEspeciais, obsAgendamento
        })
        return response.json(res);
      } catch (error) {
        console.log('Erro post Agendamento' + error);
        return response.json(400);
      }
    },

    async delete(request, response) {
      const { _id } = request.body;
      try {
        const res = await Agendamento.findByIdAndDelete({
          _id
        })
        return response.json('Agendamento deletado')
      } catch (error) {
        console.log('Erro delete Agendamento')
        return response.json(400)
      }
    },
  
   async put(request, response) {
      const { _id, idUnidadeSaude, idPessoa, dtAgendamento, necEspeciais, obsAgendamento } = request.body;
      try {
        const res = await Agendamento.findByIdAndUpdate({ _id }, {
          idUnidadeSaude, idPessoa, dtAgendamento, necEspeciais, obsAgendamento
        }, { new: true })
        return response.json(res);
      } catch (error) {
        console.log('Erro put Agendamento');
        return response.json(400);
      }
    },
};
