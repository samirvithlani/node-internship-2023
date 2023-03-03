const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
    }
},{
    timestamps:true
})
module.exports = mongoose.model('category',categorySchema)