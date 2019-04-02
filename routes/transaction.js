const express = require('express')
const router = express.Router()
const controller = require('../Controllers/transactions')

router.get('/transactions', controller.read)
router.get('/transactions/:id', controller.read)
router.post('/transactions', controller.create)
router.delete('/transactions/:id', controller.delete)
router.put('/transactions/:id', controller.update)

module.exports = router