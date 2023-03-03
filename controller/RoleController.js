const roleSchema = require('../schema/RoleSchema');

const addRole = (req,res)=>{
    const role = new roleSchema(req.body);
    role.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in adding role",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"Role added successfully",
                data:data
            })
        }
    })
}

const getAllRoles = (req,res)=>{


    roleSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in fetching roles",
                err:err
            })
        }
        else{
            if(data!=null || data!=undefined || data.length!=0){
                res.status(200).json({
                    message:"Roles fetched successfully",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"Roles not found",
                })
            }
        }
    })

}
module.exports = {
    addRole,
    getAllRoles
}