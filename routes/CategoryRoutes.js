const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');

router.post('/add',categoryController.addCategory);
router.get('/get',categoryController.getAllCategory);

module.exports = router;