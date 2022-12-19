const { Router } = require('express')
const {
    createCommand,
    editCommand,
    deleteCommand,
    getCommand,
    getAllCommands
} = require('../controllers/command.controllers')

const router = Router();

router.post('/create', createCommand)
router.get('/get/:channel/:name', getCommand)
router.get('/getAll/:channel', getAllCommands)
router.put('/edit/:channel/:name', editCommand)
router.delete('/delete/:channel/:name', deleteCommand)

module.exports = router
