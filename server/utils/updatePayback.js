const cron = require('node-cron');
const Followup = require('../models/followups-models');
const { ObjectId } = require('mongodb');

async function updatePayBackDays() {
    try {
        const currentDate = new Date();
        const candidates = await Followup.find({});


        for (let candidate of candidates) {
            const lastUpdated = new Date(candidate.lastUpdated);
            const diffDays = Math.floor((currentDate - lastUpdated) / (1000 * 60 * 60 * 24));

            // Decrement PayBackDays by 1 each time the function runs
            const newPayBackDays = Math.max(candidate.PayBackDays - 1, 0);
            const updateResult = await Followup.updateOne(
                { _id: new ObjectId(candidate._id) },
                { $set: { PayBackDays: newPayBackDays, lastUpdated: currentDate } }
            );
            
        }

    } catch (error) {
        console.error('Error updating payback days:', error);
    }
}

module.exports = updatePayBackDays;
