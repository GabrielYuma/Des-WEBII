let router = require('express').Router();

const unidadesController = require('../controllers/unidadesController_2');

router.post('/unidades', unidadesController.adicionarUnidadePg);
router.get('/unidades', unidadesController.listarUnidadesPg);
router.get('/unidades/:id', unidadesController.listarUnidadesPorIdPg);
router.put('/unidades/:id', unidadesController.atualizarUnidadePg);
router.delete('/unidades/:id', unidadesController.removerUnidadePg);

module.exports = router;