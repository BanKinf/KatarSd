const { Router } = require('express')
const {
    createUser,
} = require('../controllers/user.controllers')

const router = Router();

router.post('/create', createUser)

module.exports = router