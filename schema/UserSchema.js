const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    }
})
//create model of mongoose for userSchema
// mongoose.model('users',UserSchema)
// module.exports = UserSchema
module.exports = mongoose.model('users',UserSchema)