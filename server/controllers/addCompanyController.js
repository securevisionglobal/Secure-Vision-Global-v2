const companynamemodel = require('../models/companyName-models')
module.exports.addCompanyName = async(req,res)=>{
    const {companyname} = req.body;
    if(!companyname) return res.status(404).json({message: 'Company name is required'}) 
    try {
        const newCompanyName = new companynamemodel({companyname})
        await newCompanyName.save()
        res.status(201).json({message: 'Company name added successfully', CompanyName: newCompanyName})
        
    } catch (error) {
        res.status(500).json({message: 'Error while saving company', error: error.message})
    }

}

module.exports.getCompanyName = async(req,res)=>{
    try {
        const companyName = await companynamemodel.find()
        res.status(200).json(companyName)
    } catch (error) {
        res.status(500).json({message: 'Error while fetching company', error: error.message})
        
    }
}

module.exports.deleteCompanyName = async(req,res)=>{

    const { id } = req.params;
    if(!id) return res.status(500).json({message: 'Comapny name is required'})
    try {
        const deletedCompanyName = await companynamemodel.findByIdAndDelete(id)
        if(!deletedCompanyName) return res.status(404).json({message: 'Company name not found'})
            
        res.status(200).json({message: 'Company name deleted successfully', CompanyName: deletedCompanyName})
    } catch (error) {
        res.status(500).json({message: 'Failed to delete company', error: error.message})
    }

}