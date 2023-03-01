const employeeSchema = require('../schema/EmployeeSchema');

const getEmployees = (req,res)=>{

    employeeSchema.find((err,data)=>{
        if(err){

            res.status(404).json({
                message:"error in fetching data",
            })
        }
        else{
            res.status(200).json({
                message:"data fetched successfully",
                data:data
            })
        }
    })
}

const addEmployee = (req,res)=>{

    console.log("emp...",req.body)

    const employee = new employeeSchema(req.body)
    employee.save((err,success)=>{
        if(err){
            res.status(500).json({
                message:"error in adding employee",
            })
        }
        else{
            res.status(201).json({
                message:"employee added successfully",
                data:success
            })
        }
    })



}



module.exports ={
    getEmployees,
    addEmployee
}
