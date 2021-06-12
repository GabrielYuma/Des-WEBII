let router = require('express').Router();

const pessoasController = require('../controllers/pessoasController_2');

router.post('/pessoas', pessoasController.adicionarPessoaPg);
router.get('/pessoas', pessoasController.listarPessoasPg);
router.get('/pessoas/:id', pessoasController.listarPessoaPorIdPg);
router.put('/pessoas/:id', pessoasController.atualizarPessoaPg);
router.delete('/pessoas/:id', pessoasController.removerPessoaPg);

module.exports = router;