const express = require('express')
const router = express.Router()

const login = require('./modules/login')
router.use('/', login)

const home = require('./modules/home')
router.use('/home', home)

module.exports = router