const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
    },
    status:{
        type:Boolean,
        default:true
    }
})
module.exports = mongoose.model('role',roleSchema);