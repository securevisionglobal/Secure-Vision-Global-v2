const userModel = require('../models/hr-models');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcrypt');
// module.exports.registerUser = async(req, res)=>{
//     const {name, empId, contact, password} = req.body;
//     try{
//         let user = await userModel.findOne({empId})
//         if(user) return res.status(400).json({message:"User already exists"})
        
//         //Encrypt the password
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(password, salt)

//         //Save the user to the database
//         user = await userModel.create({
//             name,
//             empId,
//             contact,
//             password: hashedPassword
//         })

//         //Lets generate the token and set cookies
//         const token = generateToken({empId})
//         res.cookie("token", token, {
//             maxAge: 24 * 60 * 60 * 1000,
//             httpOnly: true,
//             secure: true,
//         })
//         res.send(user);

//     }catch(err){
//         res.status(500).json({message:err.message})
//     }
// }

module.exports.login = async(req, res)=>{
    const { empId, password } = req.body;
    
    try{
        let user = await userModel.findOne({empId});
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        // comparing the password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({success: false, message:"Invalid password"})
        }else{
            //Generate the token and set cookies
            const token = generateToken({empId})
            res.cookie("emptoken", token, {
                maxAge: 24 * 60 * 60 * 1000,
                // httpOnly: true,
                secure: false,
                sameSite: 'Strict'
            })
            return res.status(200).json({
                success:true, 
                message:"Login successful",
                hrName: user.name,
            })
        }


    }catch(err){
        res.status(500).json({message:err.message})
    }

}

module.exports.logout = async(req, res)=>{
    res.clearCookie("emptoken",{
        secure: false,
        sameSite: 'Strict'
    });
    res.send({message:"Logged out successfully"}) 

}