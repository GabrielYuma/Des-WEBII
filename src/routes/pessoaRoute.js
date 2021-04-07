const express = require('express');
const routes = express.Router();

const PessoaController = require("../controllers/pessoaController");

routes.get("/pessoas/:cpf", PessoaController.get);
routes.post("/pessoas", PessoaController.post);
routes.put("/pessoas", PessoaController.put);
routes.delete("/pessoas", PessoaController.delete);

module.exports = routes