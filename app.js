const express = require('express')
const mongoose = require('mongoose')
//created and initialized express app
const app = express()
const PORT = 3000


// mongoose.connect("url",{options},(err)=>{})
var user={
    name:"raj",
    email:"raj@gmail.com",
    age:25
}
var employees =[
    {
        id:101,
        name:"amit",
        salary:25600
    },
    {
        id:102,
        name:"raj",
        salary:12000
    }
]


app.get('/demo',(req,res)=>{
    
})
app.get('/employee',(req,res)=>{


    res.status(200).json({
        data:employees,
        message:"employee data"
    })

})

app.get('/user',(req,res)=>{

    res.status(200).json({
        data:user,
        message:"user data"

    })

})

app.get('/test',(req,res)=>{

    //res.send("test.....")

    res.status(201).json({
        message:"Hello"
    })

})

//mongoose.connect("url",{options},(err)=>{})
mongoose.connect("mongodb://127.0.0.1:27017/pms_node",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log("not connected to db")
    }
    else{
        console.log("db connected...")
    }
})

app.listen(PORT,()=>{
    console.log('server started on port',PORT)
})