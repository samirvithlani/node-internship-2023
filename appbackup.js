const express = require('express')
const mongoose = require('mongoose')
//created and initialized express app

// var userName = require('./users')
// var email =require('./users')

// var testEmp = require('./employee')
// var x = testEmp()
// console.log(x)

var employee = require('./employee')

 employee.testEmp()

var y = employee.testEmp2()
console.log(y)


var data =require('./users')
console.log(data)

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
    
    return res.send(data.userName+data.email)
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