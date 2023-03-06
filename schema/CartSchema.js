const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({

    //cart id  -->object
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    products:[
        {
            type:Schema.Types.ObjectId,
            ref:'product'
        }
    ]
},
{
    timestamps:true,
})
module.exports = mongoose.model('cart',cartSchema)