const unidadeModelPg = require('../models/UnidadeSaude_2');

exports.adicionarUnidadePg = async(req, res) => {

    const unidade = req.body;

    const unidadeExiste = await unidadeModelPg.findAll({
        where: {
            nomeUnidade: unidade.nomeUnidade
        }
    });

    console.log(unidadeExiste);

    if(unidadeExiste.length > 0){
        res.json({
            status: 'ok',
            message: "Unidade já cadastrada"
        });
    }else{
        const unidadeInserida = await unidadeModelPg.create({
            nomeUnidade: unidade.nomeUnidade,
            desUnidade: unidade.desUnidade,
            endUnidade: unidade.endUnidade,
            telUnidade: unidade.telUnidade,
            emailUnidade: unidade.emailUnidade,
            latlongUnidade: unidade.latlongUnidade
        });
        res.json({
            status: 'ok',
            message: unidadeInserida
        });
    }
}

exports.listarUnidadesPg = async(req, res) => {

    try {
        const unidades = await unidadeModelPg.findAll();
        res.json({
            status: 'ok',
            message: unidades
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'erro',
            message: `Erro: ${error.message}`
        });
    }
}

exports.listarUnidadesPorIdPg = async(req, res) => {

    let idUnidade = req.params.idUnidade;

    try {
        const unidadeEspecifica = await unidadeModelPg.findByPk(idUnidade);
        console.log(unidadeEspecifica);
        if(unidadeEspecifica){
            res.json({
                status: 'ok',
                unidade: unidadeEspecifica
            });
        }else{
            res.json({
                status: 'erro',
                message: `Não foi encontrada unidade de ID: ${idUnidade}`
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

exports.atualizarUnidadePg = async (req, res) => {
    let idUnidade = req.params.idUnidade;

    let novaUnidade = {
        nomeUnidade: req.body.nomeUnidade,
        desUnidade: req.body.desUnidade,
        endUnidade: req.body.endUnidade,
        telUnidade: req.body.telUnidade,
        emailUnidade: req.body.emailUnidade,
        latlongUnidade: req.body.latlongUnidade
    }

    if(idUnidade){
        let unidadeAtualizada = await unidadeModelPg.update(novaUnidade, {where: {id: idUnidade}});
        if(unidadeAtualizada){
            res.json({
                status: 'ok',
                message: 'Update realizado'
            });
        }else{
            res.json({
                status: 'erro',
                message: `Não foi encontrada unidade de ID: ${idUnidade}`
            });
        }
    }else{
        console.log("Sem id");
    }
}

exports.removerUnidadePg = async (req, res) => {
    let idUnidade = req.params.idUnidade;

    if(idUnidade){
        try {
            let unidadeDeletada = await unidadeModelPg.destroy({where: {id: idUnidade}});
            if(unidadeDeletada){
                res.json({
                    status: 'ok',
                    message: `Unidade de ID: ${idUnidade} foi deletada!`
                });
            }else{
                res.json({
                    status: 'erro',
                    message: `Não foi encontrada unidade de ID: ${idUnidade}`
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