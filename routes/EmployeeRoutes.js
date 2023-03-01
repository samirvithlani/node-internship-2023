const express = require('express')
const router = express.Router()
const employeeController = require('../controller/EmployeeController')
router.get('/employee',employeeController.getEmployees)
router.post('/employee',employeeController.addEmployee)

module.exports = router