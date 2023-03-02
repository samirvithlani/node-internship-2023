const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

const userRoutes = require('./routes/UserRoutes')
const employeeRoutes = require('./routes/EmployeeRoutes')
const productRoutes = require('./routes/ProductRoutes')
//we have to use userRoutes in app.js
app.use('/user',userRoutes)
app.use('/employee',employeeRoutes)
app.use('/product',productRoutes)


mongoose.connect("mongodb://127.0.0.1:27017/pms_node",{},(err)=>{
    if(err){
        console.log("error in db connections....")
    }
    else{
        console.log("db connected....")
    }
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})