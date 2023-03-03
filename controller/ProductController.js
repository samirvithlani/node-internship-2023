const productSchema = require('../schema/ProductSchema')

const getProductsWithCat = (req,res)=>{


    productSchema.find().populate('category').exec((err,products)=>{
        if(err){
            res.status(500).json({
                message:"Error in getting products",
                err:err
            })
        }
        else{
            if(products!=null || products!=undefined || products.length!=0){
                res.status(200).json({
                    message:"Products fetched successfully",
                    products:products
                })
            }
            else{
                res.status(404).json({
                    message:"Products not found",
                })
            }

        }

    })




}



const updateProduct = (req,res)=>{

        const id = req.params.id

        productSchema.findByIdAndUpdate(id,req.body,(err,success)=>{


                if(err){
                    res.status(500).json({
                        message:"Error in updating product",
                        err:err
                    })
                }
                else{
                if(success!=null || success!=undefined){
                    res.status(200).json({
                        message:"Product updated successfully",
                    })
                }
                else{
                    res.status(404).json({
                        message:"Product not found",
                    })
                }



                }


        })



}



const deleteProducts = (req,res)=>{
    const id = req.params.id

    productSchema.findByIdAndDelete(id,(err,product)=>{

        if(err){
            res.status(500).json({
                message:"Error in deleting product",
                err:err
            })
        }
        else{
            if(product!=null || product!=undefined){
                res.status(200).json({
                    message:"Product deleted successfully",
                    product:product
                })
            }
            else{
                res.status(404).json({
                    message:"Product not found",
                })
            }
        }


    })




}

const getProductById = (req,res)=>{

    const id = req.params.id
    productSchema.findById(id,(err,product)=>{

        if(err){
            res.status(500).json({
                message:"Error in getting product",
                err:err
            })
        }
        else{

            if(product!=null || product!=undefined){
                res.status(200).json({
                    message:"Product fetched successfully",
                    product:product
                })
            }
            else{
                res.status(404).json({
                    message:"Product not found",
                })
            }



        }



    })


}

const getAllProducts = (req,res)=>{

    productSchema.find((err,products)=>{

        if(err){
            res.status(500).json({
                message:"Error in getting products",
                err:err
            })
        }
        else{
            if(products!=null || products!=undefined || products.length!=0){
                res.status(200).json({
                    message:"Products fetched successfully",
                    products:products
                })
            }
            else{
                res.status(404).json({
                    message:"Products not found",
                })
            }

        }

    })


}


const addProduct = (req,res)=>{

    const product = new productSchema(req.body)
    product.save((err,data)=>{

        if(err){
            res.status(500).json({
                message:"Error in saving product",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"Product saved successfully",
                data:data
            })
        }


    })
}

module.exports ={
    addProduct,
    getAllProducts,
    getProductById,
    deleteProducts,
    updateProduct,
    getProductsWithCat
}