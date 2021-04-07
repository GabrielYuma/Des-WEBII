const Unidades = require("../models/UnidadeSaude");
module.exports = {
  async get(request, response) {
    try {
      const res = await Unidades.find()
      return response.json(res)
    } catch (error) {
      console.log('Erro get Unidade')
      return response.json(400)
    }
  },

  async post(request, response) {
    const { nome, descricao, endUnidade, telefone, email, latLong } = request.body;
    try {
      const res = await Unidades.create({
        nome, descricao, endUnidade, telefone, email, latLong
      })
      return response.json(res);
    } catch (error) {
      console.log('Erro post Unidade' + error);
      return response.json(400);
    }
  },

  delete(request, response) {
    //logica de deleção dos dados
  },

  put(request, response) {
    //logica de Modificação dos dados
  },
};
