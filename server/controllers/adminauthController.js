const bcrypt = require("bcrypt");
const adminModels = require("../models/admin-models");
const userModel = require("../models/hr-models");
const generateToken = require("../utils/generateToken");


module.exports.registerUser = async(req, res)=>{
    const {name, empId, contact, password} = req.body;
    try{
        let user = await userModel.findOne({empId})
        if(user) return res.status(400).json({message:"User already exists"})
        
        //Encrypt the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //Save the user to the database
        user = await userModel.create({
            name,
            empId,
            contact,
            password: hashedPassword
        })

        res.send(user);

    }catch(err){
        res.status(500).json({message:err.message})
    }
}
module.exports.register = async(req, res)=>{
    const {adminId, password} = req.body;
    try{
        let admin = await adminModels.findOne({adminId});
        if(admin){
            return res.status(400).json({error: "Admin already exists"})
        }
        let salt = await bcrypt.genSalt();
        let hashedPassword = await bcrypt.hash(password, salt);

        admin = await adminModels.create({
            adminId,
            password: hashedPassword
        })

        let token = generateToken({adminId});
        res.cookie("token", token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true
        })
        res.status(201).json({message: "Admin registered successfully"})

    }catch(e){
        res.status(500).json({error: e.message})
    }
}
module.exports.login = async(req, res)=>{
    const { adminId, password } = req.body;
    try{
        let admin = await adminModels.findOne({adminId})
        if(!admin){
            return res.status(404).json({error: "Admin not found"})
        }
        let isMatch = await bcrypt.compare(password, admin.password);
        if(isMatch){
            let token = generateToken({adminId});
            res.cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: true
            })
            res.json({message: "Admin logged in successfully"})
        }else{
            return res.status(401).json({error: "Invalid credentials"})
        }

    }catch(err){
        res.status(500).json({error: err.message})
    }
    
}
module.exports.logout = async(req,res)=>{
    res.clearCookie("token")
    res.json({message: "Admin logged out successfully"})
    
}