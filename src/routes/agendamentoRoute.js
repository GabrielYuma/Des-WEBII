const express = require('express');
const routes = express.Router();

const AgendamentoController = require("../controllers/agendamentoController");

routes.get("/agendamentos/:idPessoa", AgendamentoController.get);
routes.post("/agendamentos",  AgendamentoController.post);
routes.put("/agendamentos",  AgendamentoController.put);
routes.delete("/agendamentos",  AgendamentoController.delete);

module.exports = routes