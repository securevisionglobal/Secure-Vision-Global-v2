const followupsModel = require('../models/followups-models');

module.exports.addCandidate = async (req, res) => {
    const { name, Number, CompanyName, HRName, DOJ, Status, PayBackDays } = req.body;
    
    // Basic validation
    if (!name || !Number || !CompanyName || !HRName || !DOJ || !Status || !PayBackDays) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Create a new candidate instance
        const newCandidate = new followupsModel({
            name,
            Number,
            CompanyName,
            HRName,
            DOJ,
            Status,
            PayBackDays
        });

        // Save the candidate to the database
        await newCandidate.save();

        // Respond with success message
        res.status(201).json({ message: 'Candidate added successfully', data: newCandidate });
    } catch (error) {
        // Handle errors and respond with appropriate message
        res.status(500).json({ message: 'Error adding candidate', error: error.message });
    }
};

// Get all candidates
module.exports.getCandidates = async (req, res) => {
    try {
        const candidates = await followupsModel.find()
        res.status(200).json(candidates);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching candidates', error: error.message });
    }
};

// Update a candidate
module.exports.updateCandidate = async (req, res) => {
    const { id } = req.params;
    const { name, Number, CompanyName, HRName, DOJ, Status, PayBackDays } = req.body;

    // Basic validation
    if (!name || !Number || !CompanyName || !HRName || !DOJ || !Status || !PayBackDays) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Find the candidate by ID and update their details
        const updatedCandidate = await followupsModel.findByIdAndUpdate(
            id,
            { name, Number, CompanyName, HRName, DOJ, Status, PayBackDays },
            { new: true } // Return the updated document
        );

        if (!updatedCandidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        res.status(200).json({ message: 'Candidate updated successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error updating candidate', error: error.message });
    }
};
