const Pessoa = require("../models/Pessoa")

var Pessoas  = [];

var Andre = new Pessoa(1, "André Francisco da Silva ", "830.119.357-34", "12/03/1949", true, "29182-808", "aandrefranciscodasilva@unitower.com.br", "(27) 99457-5555");
var Joao = new Pessoa(2, "João Francisco da Silva ", "130.558.357-34", "13/09/1990", false, "29182-808", "joaofranciscodasilva@unitower.com.br", "(27) 99457-5555");
var Fernanda = new Pessoa(3, "Fernanda de Souza e Paulo ", "130.558.357-34", "13/09/1999", false, "29182-808", "fernanda@unitower.com.br", "(27) 99457-5555");
var Amanda = new Pessoa(4, "Amanda de Jesus Firmino", "130.558.357-34", "13/09/2001", false, "29182-808", "amanda@unitower.com.br", "(27) 99457-5555");
Pessoas.push(Andre, Amanda, Joao, Fernanda);

module.exports = Pessoas;