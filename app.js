const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

const userRoutes = require('./routes/UserRoutes')
const employeeRoutes = require('./routes/EmployeeRoutes')
const productRoutes = require('./routes/ProductRoutes')
const categoryRoutes = require('./routes/CategoryRoutes')
const roleRoutes = require('./routes/RoleRoutes')
const cartRoutes = require('./routes/CartRoutes')
//we have to use userRoutes in app.js
app.use('/user',userRoutes)
app.use('/employee',employeeRoutes)
app.use('/product',productRoutes)
app.use('/category',categoryRoutes)
app.use('/role',roleRoutes)
app.use('/cart',cartRoutes)


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