const categorySchema = require('../schema/categorySchema')

const addCategory = (req,res)=>{


    const category = new categorySchema(req.body)
    category.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error in adding category",
            })
        }
        else{
            res.status(201).json({
                message:"category added successfully",
                data:data
            })
        }

    })
}
const getAllCategory = (req,res)=>{

    categorySchema.find((err,data)=>{
        if(err){
            res.status(404).json({
                message:"error in fetching data"  
            })
        }
        else{
            res.status(200).json({
                message:"data fetched successfully",
                data:data
            })
        }
        
    })

}

module.exports = {
    addCategory,
    getAllCategory
}