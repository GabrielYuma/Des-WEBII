const pessoasModelPg = require('../models/Pessoas_2');

exports.adicionarPessoaPg = async(req, res) => {

    const pessoa = req.body;

    const pessoaExiste = await pessoasModelPg.findAll({
        where: {
            nomePessoa: pessoa.nomePessoa
        }
    });

    console.log(pessoaExiste);

    if(pessoaExiste.length > 0){
        res.json({
            status: 'ok',
            message: "Pessoa já cadastrada"
        });
    }else{
        const pessoaInserida = await pessoasModelPg.create({
            nomePessoa: pessoa.nomePessoa,
            cpfPessoa: pessoa.cpfPessoa,
            nascPessoa: pessoa.nascPessoa,
            telPessoa: pessoa.telefone_unidade,
            grupoPessoa: pessoa.grupoPessoa,
            endPessoa: pessoa.endPessoa,
            emailPessoa: pessoa.emailPessoa
        });
        res.json({
            status: 'ok',
            message: pessoaInserida
        });
    }
}

exports.listarPessoasPg = async(req, res) => {

    try {
        const pessoas = await pessoasModelPg.findAll();
        res.json({
            status: 'ok',
            message: pessoas
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'erro',
            message: `Erro: ${error.message}`
        });
    }
}

exports.listarPessoaPorIdPg = async(req, res) => {

    let idPessoas = req.params.idPessoas;

    try {
        const pessoaEspecifica = await pessoasModelPg.findByPk(idPessoas);
        console.log(pessoaEspecifica);
        if(pessoaEspecifica){
            res.json({
                status: 'ok',
                message: 'Busca realizada',
                unidade: pessoaEspecifica
            });
        }else{
            res.json({
                status: 'erro',
                message: `Não foi encontrada pessoa de ID: ${idPessoas}`
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

exports.atualizarPessoaPg = async (req, res) => {
    let idPessoas = req.params.idPessoas;

    let novaPessoa = {
        nomePessoa: req.body.nomePessoa,
        cpfPessoa: req.body.cpfPessoa,
        nascPessoa: req.body.nascPessoa,
        telPessoa: req.body.telefone_unidade,
        grupoPessoa: req.body.grupoPessoa,
        endPessoa: req.body.endPessoa,
        emailPessoa: req.body.emailPessoa
    }

    if(idPessoas){
        let pessoaAtualizada = await pessoasModelPg.update(novaPessoa, {where: {id: idPessoas}});
        if(pessoaAtualizada){
            res.json({
                status: 'ok',
                message: 'Update realizado'
            });
        }else{
            res.json({
                status: 'erro',
                message: `Não foi encontrada pessoa de ID: ${idPessoas}`
            });
        }
    }else{
        console.log("Sem id");
    }
}

exports.removerPessoaPg = async (req, res) => {
    let idPessoas = req.params.idPessoas;

    if(idPessoas){
        try {
            let pessoaDeletada = await pessoasModelPg.destroy({where: {id: idPessoas}});
            if(pessoaDeletada){
                res.json({
                    status: 'ok',
                    message: `Pessoa de ID: ${idPessoas} doi deletada!`
                });
            }else{
                res.json({
                    status: 'erro',
                    message: `Não foi encontrada pessoa de ID: ${idPessoas}`
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