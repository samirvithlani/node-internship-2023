const express = require('express')
const router = express.Router()
const userController= require('../controller/UserController')

router.get('/user',userController.getUserData)
router.post('/user',userController.addUser)

module.exports = router
