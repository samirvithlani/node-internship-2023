const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
const userSchema = require('./schema/UserSchema')
const EmployeeSchema = require('./schema/EmployeeSchema')



app.get('/user',(req,res)=>{


    userSchema.find((err,data)=>{
        if(err){
            res.status(404).json({
                message:"Data not found..."
            })
        }
        else{
            res.status(200).json({
                data:data,
                message:"Data found..."
            })
        }
    })


})



mongoose.connect("mongodb://127.0.0.1:27017/pms_node",{
    
},(err)=>{
    if(err){
        console.log("error while conecting db....")
    }
    else{
        console.log("database connected...")
    }
})





app.listen(PORT,()=>{
    console.log("server is running on port" , PORT)
})



