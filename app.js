const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended:true}))



const userRoutes = require('./routes/UserRoutes')
const employeeRoutes = require('./routes/EmployeeRoutes')
const productRoutes = require('./routes/ProductRoutes')
const categoryRoutes = require('./routes/CategoryRoutes')
const roleRoutes = require('./routes/RoleRoutes')
const cartRoutes = require('./routes/CartRoutes')
const fileUploadRoutes = require('./routes/FileUploadRoutes')
const mailSendRoutes = require('./routes/MailRoutes')
const addtoCart = require('./routes/AddProductToCartRoutes')
//we have to use userRoutes in app.js
app.use('/user',userRoutes)
app.use('/employee',employeeRoutes)
app.use('/product',productRoutes)
app.use('/category',categoryRoutes)
app.use('/role',roleRoutes)
app.use('/cart',cartRoutes)
app.use('/upload',fileUploadRoutes)
app.use('/mail',mailSendRoutes)
app.use('/addtocart',addtoCart)



mongoose.connect("mongodb://127.0.0.1:27017/pms_node",{},(err)=>{
    if(err){
        console.log("error in db connections....")
    }
    else{
        console.log("db connected....")
    }
})

const PORT = 4000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})