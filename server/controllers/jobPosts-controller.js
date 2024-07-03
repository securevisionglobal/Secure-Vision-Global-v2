const jobPosts = require('../models/jd-models')

//create
module.exports.addJobPost = async( req, res) =>{
    const { companyName, jobTitle, location, salary, description} = req.body;

    try{
        const newJobPost = new jobPosts({
            companyName,
            jobTitle,
            location,
            salary,
            description
        })
        await newJobPost.save();
        res.status(201).json({message : "Job saved successfully"});
    } catch(err){
        return res.status(400).json({message: err.message})
    }
}

//read
module.exports.getJobPosts = async(req, res) =>{
    try{
        const alljobs = await jobPosts.find()
        res.status(200).json(alljobs)
    }catch(err){
        return res.status(500).json({message: err.message})
    }

}


//delete
module.exports.deleteJobPost = async(req, res) =>{
    try{
        const { id } =req.params;
        const deletedJob = await jobPosts.findByIdAndDelete(id);
        if(!deletedJob){
            return res.status(404).json({message: "Job not found"})
        }
        res.status(200).json({message: "Job deleted successfully"})
    }catch(err){
        return res.status(500).json({message: err.message})
    }
    
}