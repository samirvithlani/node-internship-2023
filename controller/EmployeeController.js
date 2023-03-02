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

const deleteEmployee = (req,res)=>{

    const id = req.params.id
    employeeSchema.findByIdAndDelete(id,(err,success)=>{

        if(err){
            res.status(404).json({
                message:"error in deleting employee",
            })
        }
        else{
            if(success!= null || success!= undefined){
                res.status(200).json({
                    message:"employee deleted successfully",
                    data:success
                })
            }
            else{
                res.status(404).json({
                    message:"employee not found",
                })
            }
        }
    })


}


const getEmployeeById = (req,res)=>{

    const id = req.params.id
    employeeSchema.findById(id,(err,employee)=>{
        if(err){
            res.status(404).json({
                message:"error in fetching data",
            })
        }
        else{
            if(employee==null || employee == undefined){
                res.status(404).json({
                    message:"employee not found",
                })
            }
            else{
                res.status(200).json({
                    message:"data fetched successfully",
                    data:employee
                })
            }
          
        }


    })




}

const updateEmployee = (req,res)=>{

    const id = req.params.id
    employeeSchema.findByIdAndUpdate(id,req.body,(err,success)=>{

        if(err){
            res.status(404).json({
                message:"error in updating employee",
            })
        }
        else{
            if(success!=null || success!=undefined){
                res.status(200).json({
                    message:"employee updated successfully",
                    
                })
            }
            else{
                res.status(404).json({
                    message:"employee not found",
                })
            }
        }


    })


}




module.exports ={
    getEmployees,
    addEmployee,
    getEmployeeById,
    deleteEmployee,
    updateEmployee
}
