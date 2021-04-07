const express = require('express');
const routes = express.Router();

const PessoaRoute = require("./pessoaRoute");
const UnidadeRoute = require("./unidadeRoute");
const AgendamentoRoute = require("./agendamentoRoute");

routes.use(PessoaRoute);
routes.use(UnidadeRoute);
routes.use(AgendamentoRoute);


module.exports = routes