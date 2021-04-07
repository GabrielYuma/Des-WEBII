const Agendamento = require("../models/Agendamento");

var Agendamentos = [];

var AndreCentro = new Agendamento(1, 1,  Date.now(), true, "Paciente Cego,possui disturbio respiratorio");
var AmandaRural = new Agendamento(4,3, Date.now(), false, "");
var JoaoColegio = new Agendamento(2,2, Date.now(), false, "");
var FernandaAparecida = new Agendamento(3,4, Date.now(), true, "Paciente Surdo, fotofobica");

Agendamentos.push(AndreCentro, AmandaRural, JoaoColegio, FernandaAparecida)

module.exports = Agendamentos;