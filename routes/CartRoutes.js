const express = require('express');
const router = express.Router();
const cartController = require('../controller/CartController');
router.post('/cart',cartController.addProductToCart)
router.get('/cart',cartController.getCartDetail)
router.put('/cart/:cartid',cartController.removeProducFromCart)
module.exports = router;