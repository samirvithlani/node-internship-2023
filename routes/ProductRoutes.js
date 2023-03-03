const express = require('express')
const router = express.Router()
const productController = require('../controller/ProductController')

router.post('/product',productController.addProduct)
router.get('/product',productController.getAllProducts)
router.get('/productc',productController.getProductsWithCat)
router.get('/product/:id',productController.getProductById)
router.delete('/product/:id',productController.deleteProducts)
router.put('/product/:id',productController.updateProduct)

module.exports = router