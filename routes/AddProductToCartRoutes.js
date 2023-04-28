const express = require('express');
const router = express.Router();
const productCartSchema = require('../schema/ProductCartSchema');
const AddToCartController = require('../controller/AddToCartController');

router.post('/addtocart',AddToCartController.addToCart);
router.get('/getcartdetails',AddToCartController.getCartDetails);
router.put('/updatecartquantity/:id',AddToCartController.updateCartQuantity);
router.put('/pushnewproducttocart/:id',AddToCartController.pushNewProductTocart);
router.put('/removeproductfromcart/:id',AddToCartController.removeProductFromCart);
router.get('/getloggedinusercart/:id',AddToCartController.getLoggedInUserCart);
module.exports = router;
