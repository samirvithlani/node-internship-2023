const express = require('express')
const router = express.Router()
const userController= require('../controller/UserController')

router.get('/user',userController.getUserData)
router.post('/user',userController.addUser)
router.get('/user/:id',userController.getUserById)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)
module.exports = router
