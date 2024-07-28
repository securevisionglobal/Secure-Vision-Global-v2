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

        res.status(200).json({success: true, message:"User created successfully"});

    }catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
}

module.exports.deleteUser = async(req, res) =>{
    const { empId } = req.params;
    try{
        let user = await userModel.findOneAndDelete({empId})
        if(!user){
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, message: "User deleted successfully" });

    }catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
}

module.exports.getallUsers = async (req,res) =>{
    try{
        let users = await userModel.find().select('-password');
        res.json(users)
    }catch(err){
        res.status(500).json({ success: false, message: err.message });
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
                
                secure: true,
                sameSite: 'Strict'
            })
            
            res.json({success: true, message: "Admin logged in successfully"})
        }else{
            return res.status(401).json( { success: false ,message: "Invalid credentials"})
        }

    }catch(err){
        res.status(500).json({ success: false, message: 'Error logging in' });
    }
    
}
module.exports.logout = async(req,res)=>{
    res.clearCookie('token', {
       
        secure: true,
        sameSite: 'Strict' // Match the sameSite attribute used when setting the cookie
      });
    res.json({success: true ,message: "Admin logged out successfully"})
    
}