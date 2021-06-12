const agendamentoModelPg = require('../models/Agendamento_2');

exports.postAgendamento = async(req, res) => {

    const agendamento = req.body;

    const agendamentoExiste = await agendamentoModelPg.findAll({
        where: {
            dtAgendamento: agendamento.dtAgendamento
        }
    });

    console.log(agendamentoExiste);

    if(agendamentoExiste.length > 0){
        res.json({
            status: 'ok',
            message: "Horário indisponível"
        });
    }else{
        const agendamentoInserido = await agendamentoModelPg.create({
            dtAgendamento: agendamento.dtAgendamento,
            necEspeciais: agendamento.necEspeciais,
            obsAgendamento: agendamento.obsAgendamento
        });
        res.json({
            status: 'ok',
            message: agendamentoInserido
        });
    }
}

exports.listarAgendamentosPg = async(req, res) => {

    try {
        const agendamentos = await agendamentoModelPg.findAll();
        res.json({
            status: 'ok',
            message: agendamentos
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'erro',
            message: `Erro: ${error.message}`
        });
    }
}

exports.listarAgendamentosPorIdPg = async(req, res) => {

    let idAgendamento = req.params.idAgendamento;

    try {
        const agendamentoEspecifico = await agendamentoModelPg.findByPk(idAgendamento);
        console.log(agendamentoEspecifico);
        if(agendamentoEspecifico){
            res.json({
                status: 'ok',
                message: 'Agendamento encontrado',
                agendamento: agendamentoEspecifico
            });
        }else{
            res.json({
                status: 'erro',
                message: `Erro ao encontrar agendamento de ID: ${idAgendamento}`
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            status: 'erro',
            message: `Erro: ${error.message}`
        });
    }
}

exports.atualizarAgendamentoPg = async (req, res) => {
    let idAgendamento = req.params.idAgendamento;

    let novoAgendamento = {
        dtAgendamento: req.body.dtAgendamento,
        necEspeciais: req.body.necEspeciais,
        obsAgendamento: req.body.obsAgendamento
    }

    if(idAgendamento){
        let agendamentoAtualizado = await agendamentoModelPg.update(novoAgendamento, {where: {id: idAgendamento}});
        if(agendamentoAtualizado){
            res.json({
                status: 'ok',
                message: 'Agendamento atualizado com sucesso'
            });
        }else{
            res.json({
                status: 'erro',
                message: `Erro ao encontrar agendamento de ID: ${idAgendamento}`
            });
        }
    }else{
        console.log("Sem id");
    }
}

exports.removerAgendamentoPg = async (req, res) => {
    let idAgendamento = req.params.idAgendamento;

    if(idAgendamento){
        try {
            let agendamentoDeletado = await agendamentoModelPg.destroy({where: {id: idAgendamento}});
            if(agendamentoDeletado){
                res.json({
                    status: 'ok',
                    message: `Agendamento de id ${idAgendamento} deletado com sucesso`
                });
            }else{
                res.json({
                    status: 'erro',
                    message: `Erro ao encontrar agendamento de ID: ${idAgendamento}`
                });
            }
        } catch (error) {
            res.json({
                status: 'erro',
                message: `Erro: ${error.message}`
            });
        }
    }
}