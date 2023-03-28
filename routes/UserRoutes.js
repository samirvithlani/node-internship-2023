const express = require('express')
const router = express.Router()
const userController= require('../controller/UserController')

router.get('/user',userController.getUserDataWithRole)
router.post('/user',userController.registerUser)
router.get('/user/:id',userController.getUserById)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)
router.post('/user/login',userController.loginUser1)
module.exports = router
