const express = require('express')
const router = express.Router()
const controller = require('../Controllers/members')

router.get('/members', controller.read)
router.get('/members/:id', controller.read)
router.post('/members', controller.create)
router.delete('/members/:id', controller.delete)
router.put('/members/:id', controller.update)

module.exports = router