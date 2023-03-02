const express = require('express')
const router = express.Router()
const employeeController = require('../controller/EmployeeController')
router.get('/employee',employeeController.getEmployees)
router.post('/employee',employeeController.addEmployee)
router.get('/employee/:id',employeeController.getEmployeeById)
router.delete('/employee/:id',employeeController.deleteEmployee)
router.put('/employee/:id',employeeController.updateEmployee)
module.exports = router