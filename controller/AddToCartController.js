const productCartSchema = require("../schema/ProductCartSchema");

const addToCart = (req, res) => {
  const productCart = new productCartSchema({
    products: req.body.products,
    user: req.body.user,
  });
  productCart.save((err, success) => {
    if (err) {
      res.status(500).json({
        message: "Error in adding product to cart",
        err: err,
      });
    } else {
      if (success != null || success != undefined) {
        res.status(200).json({
          message: "Product added to cart successfully",
          success: success,
        });
      } else {
        res.status(404).json({
          message: "Product not found",
        });
      }
    }
  });
};

const getLoggedInUserCart = (req, res) => {
    const userId = req.params.id;
    productCartSchema.findOne({ user: userId })
        .populate("products")
        .exec((err, success) => {
        if (err) {
            res.status(500).json({
            message: "Error in getting cart details",
            err: err,
            });
        } else {
            if (success != null || success != undefined) {
            res.status(200).json({
                message: "Cart details fetched successfully",
                success: success,
            });
            } else {
            res.status(404).json({
                message: "Cart not found",
            });
            }
        }
        });
}

const removeProductFromCart = (req, res) => {
    const cartId = req.params.id;
    const productId = req.body.productId;
    productCartSchema.findById(cartId, (err, success) => {
        if (err) {
        res.status(500).json({
            message: "Error in removing product from cart",
            err: err,
        });
        } else {
        if (success != null || success != undefined) {
            success.products.pull(productId);
            success.save((err, success) => {
            if (err) {
                res.status(500).json({
                message: "Error in removing product from cart",
                err: err,
                });
            } else {
                if (success != null || success != undefined) {
                res.status(200).json({
                    message: "Product removed from cart successfully",
                    success: success,
                });
                } else {
                res.status(404).json({
                    message: "Product not found",
                });
                }
            }
            });
        } else {
            res.status(404).json({
            message: "Product not found",
            });
        }
        }
    });
}
const pushNewProductTocart = (req, res) => {

    const cartId = req.params.id;
    const { productId, qty } = req.body;
    productCartSchema.findById(cartId, (err, success) => {
        if (err) {
        res.status(500).json({
            message: "Error in adding product to cart",
            err: err,
        });
        } else {
        if (success != null || success != undefined) {
            success.products.push(productId);
            success.qty = qty;
            success.save((err, success) => {
            if (err) {
                res.status(500).json({
                message: "Error in adding product to cart",
                err: err,
                });
            } else {
                if (success != null || success != undefined) {
                res.status(200).json({
                    message: "Product added to cart successfully",
                    success: success,
                });
                } else {
                res.status(404).json({
                    message: "Product not found",
                });
                }
            }
            });
        } else {
            res.status(404).json({
            message: "Product not found",
            });
        }
        }
    });

}

const updateCartQuantity = (req, res) => {
  const cartId = req.params.id;
  const { productId, qty } = req.body;
  productCartSchema.findById(cartId, (err, success) => {
    if (err) {
      res.status(500).json({
        message: "Error in updating cart quantity",
        err: err,
      });
    } else {
      if (success != null || success != undefined) {
        success.products.forEach((product) => {
          if (product._id == productId) {
            productCartSchema.findByIdAndUpdate(
              cartId,
              { $set: { qty: qty } },
              (err, success) => {
                if (err) {
                  res.status(500).json({
                    message: "Error in updating cart quantity",
                    err: err,
                  });
                } else {
                  if (success != null || success != undefined) {
                    res.status(200).json({
                      message: "Cart quantity updated successfully",
                      success: success,
                    });
                  } else {
                    res.status(404).json({
                      message: "Cart not found",
                    });
                  }
                }
              }
            );
          }
        });
      } else {
        res.status(404).json({
          message: "Cart not found",
        });
      }
    }
  });
};
const getCartDetails = (req, res) => {
  productCartSchema
    .find()
    .populate("products")
    .populate("user")
    .exec((err, success) => {
      if (err) {
        res.status(500).json({
          message: "Error in getting cart details",
          err: err,
        });
      } else {
        if (success != null || success != undefined) {
          res.status(200).json({
            message: "Cart details fetched successfully",
            success: success,
          });
        } else {
          res.status(404).json({
            message: "Cart details not found",
          });
        }
      }
    });
};
module.exports = {
  addToCart,
  getCartDetails,
  updateCartQuantity,
    pushNewProductTocart,
    removeProductFromCart,
    getLoggedInUserCart
};
