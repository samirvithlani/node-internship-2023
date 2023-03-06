const cartSchema = require('../schema/CartSchema')

const addProductToCart = (req,res)=>{


    const cart = new cartSchema(req.body)
    cart.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:'Internal Server Error',
                error:err
            })
        }
        else{
            res.status(200).json({
                message:'Product added to cart',
                data:data
            })
        }

    })

}

const getCartDetail = (req,res)=>{

    cartSchema.find().populate('products').populate('user').exec((err,data)=>{
        if(err){
            res.status(500).json({
                message:'Internal Server Error',
                error:err
            })
        }
        else{
            if(data!=undefined || data!=null && data.length!=0) {
                res.status(200).json({
                    message: 'Cart Details',
                    data: data
                })
            }
            else{
                res.status(200).json({
                    message:'No Cart Details Found'
                })
            }
        }
    })



}

//push 
const removeProducFromCart  = (req,res) =>{

    const cartid = req.params.cartid
    //pull
    cartSchema.findByIdAndUpdate(cartid,{$pull:{products:req.body.productid}},(err,data)=>{

        if(err){
            res.status(500).json({
                message:'Internal Server Error',
                error:err
            })
        }
        else{
            res.status(200).json({
                message:'Product removed from cart',
                data:data
            })
        }

    })





}



module.exports = {
    addProductToCart,
    getCartDetail,
    removeProducFromCart
}
