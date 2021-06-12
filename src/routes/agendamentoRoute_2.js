let router = require('express').Router();

const agendamentoController = require('../controllers/agendamentoController_2');

router.post('/agendamentos', agendamentoController.adicionarAgendamentoPg);
router.get('/agendamentos', agendamentoController.listarAgendamentosPg);
router.get('/agendamentos/:id', agendamentoController.listarAgendamentosPorIdPg);
router.put('/agendamentos/:id', agendamentoController.atualizarAgendamentoPg);
router.delete('/agendamentos/:id', agendamentoController.removerAgendamentoPg);

module.exports = router;