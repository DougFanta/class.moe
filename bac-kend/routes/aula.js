const controller = require('../controllers/aulaController')
const express = require('express')

const router = express.Router()

router.get('/',controller.listar)
router.get('/:id', controller.buscarUm)
router.post('/', controller.novo)
router.put('/', controller.atualizar)
router.delete('/', controller.excluir)

module.exports = router