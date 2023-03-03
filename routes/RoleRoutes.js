const express = require('express');
const router = express.Router();
const roleController = require('../controller/RoleController');
router.post('/add',roleController.addRole);
router.get('/get',roleController.getAllRoles);
module.exports = router;