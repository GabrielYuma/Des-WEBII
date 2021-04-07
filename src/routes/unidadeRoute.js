const express = require('express');
const routes = express.Router();

const UnidadeController = require("../controllers/unidadeController");

routes.get("/unidades/:id?", UnidadeController.get);
routes.post("/unidades", UnidadeController.post);
routes.put("/unidades", UnidadeController.put);
routes.delete("/unidades", UnidadeController.delete);

module.exports = routes