const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
{
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    qty:{
        type:Number,
    },
    //property
    category:{
        type:Schema.Types.ObjectId,
        ref:'category'
    }
},{
    timestamps:true
})

module.exports = mongoose.model('product',ProductSchema)