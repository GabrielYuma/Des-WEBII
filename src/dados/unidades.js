const UnidadeSaude =  require("../models/UnidadeSaude");

var Unidades = [];

var Centro = new UnidadeSaude(1, "UPA Centro", "Unidade Experimental", "Centro", "(00) 0000-0000", "teste@tt.com", "-0.4026, 80.2555");
var Colegio = new UnidadeSaude(2, "Colegio Dona Zefá", "Unidade Experimental dentro do colegio", "Centro", "(00) 0000-0000", "teste1@tt.com", "-0.4026, 80.2555");
var Rural = new UnidadeSaude(3, "Escola Armindo Amado Santos", "Unidade Provisória", "Zona Rural", "(00) 0000-0000", "teste2@tt.com", "-0.4026, 80.2555");
var Aparecida = new UnidadeSaude(4, "Hospital Aparecida Desaparecida das Dores ", "Hospital Universitario", "Centro", "(00) 0000-0000", "teste3@tt.com", "-0.4026, 80.2555");

Unidades.push(Centro, Colegio, Rural, Aparecida)

module.exports = Unidades;