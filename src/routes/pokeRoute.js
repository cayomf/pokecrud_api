const express = require('express');
const router = express.Router();
const controller = require('../controllers/pokeController')

router.get('/', controller.getAll)
// router.get('/type', controller.getAllByFilter)
router.get('/:_id', controller.getById)
router.post('/', controller.create)
router.put('/:_id', controller.put)
router.delete('/:_id', controller.delete)

module.exports = router
