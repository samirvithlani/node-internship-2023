const bcrypt = require('bcrypt');
const salt = 10;
// const encryptPassword = ()=>{

//     const password = "samir"
//     var hash =""
//     //const salt = bcrypt.genSalt(10)
//     bcrypt.hash(password,salt,(err,res)=>{
        
//         hash = res
//     })
//     console.log(hash)

//     return hash
// }
// var hash = encryptPassword()
// console.log(hash)


const encryptPassword = async (password)=>{


    const hash = await bcrypt.hashSync(password,salt)
    
    return hash

}

const comparePassword = async(password,hash)=>{

    const result = await bcrypt.compareSync(password,hash)
    return result

}




//var x = encryptPassword("samir")
//console.log(x)

// var x = encryptPassword("samir")
// x.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

module.exports = {encryptPassword,comparePassword}

