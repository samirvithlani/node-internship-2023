const userSchema = require('../schema/UserSchema');



const getUserDataWithRole = (req,res)=>{

    userSchema.find().populate('role').exec((err,users)=>{
        if(err){
            res.status(500).json({
                message:"Error in getting users",
                err:err
            })
        }
        else{
            if(users!=null || users!=undefined || users.length!=0){
                res.status(200).json({
                    message:"Users fetched successfully",
                    users:users
                })
            }
            else{
                res.status(404).json({
                    message:"Users not found",
                })
            }

        }
    })

}


const getUserData = (req,res)=>{
    userSchema.find((err,data)=>{
        if(err){
            res.status(404).json({
                message:"error in fetching data"  
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


const addUser = (req,res)=>{


    const user = new userSchema(req.body)
    user.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error in adding user",
            })
        }
        else{
            res.status(201).json({
                message:"user added successfully",
                data:data
            })
        }

    })

}

const deleteUser = (req,res)=>{

    const id = req.params.id
    userSchema.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in deleting user",
            })
        }
        else{
            res.status(200).json({
                message:"user deleted successfully",
                data:success
            })
        }
    })

}


const loginUser = (req,res)=>{


    var email = req.body.email
    var password = req.body.password

    if(email!=undefined && password!= undefined && email!= "" && password!=""){
        userSchema.find({email:email,password:password},(err,data)=>{

            if(err){
                res.status(500).json({
                    message:"error while fetching user"
                })
            }
            else{
                if(data!=undefined && data!=null && data.length>0){
                    res.status(200).json({
                        message:"user found",
                        data:data
                    })
                }
                else{
                    res.status(404).json({
                        message:"user not found"
                    })
                }
            }
        })
    

    }
    else{
        res.status(404).json({
            message:"email and password both are required"
        })
    }


}


const updateUser = (req,res)=>{

    const id = req.params.id

    // const user = new userSchema(req.body)
    // user.fi
    userSchema.findByIdAndUpdate(id,req.body,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in updating user",
            })
        }
        else{
            res.status(200).json({
                message:"user updated successfully",
            })
        }
    })



}



const getUserById = (req,res)=>{

    var id = req.params.id

    userSchema.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"error in fetching data"  
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

module.exports = {
    getUserData,
    addUser,
    getUserById,
    deleteUser,
    updateUser,
    loginUser,
    getUserDataWithRole
}