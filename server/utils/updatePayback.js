const cron = require('node-cron');
const Followup = require('../models/followups-models');
const { ObjectId } = require('mongodb');

async function updatePayBackDays() {
    try {
        const currentDate = new Date();
        const candidates = await Followup.find({});

        for (let candidate of candidates) {
            const doj = new Date(candidate.DOJ); // Convert DOJ to a Date object
            const lastUpdated = new Date(candidate.lastUpdated || doj); // Fallback to DOJ if lastUpdated is not available

            // Calculate the difference in days between the current date and the last updated date
            const diffDays = Math.floor((currentDate - lastUpdated) / (1000 * 60 * 60 * 24));

            // Only proceed with the update if the current date is beyond the DOJ
            if (currentDate > doj) {
                // Decrement PayBackDays by 1 each time the function runs, but not below 0
                const newPayBackDays = Math.max(candidate.PayBackDays - 1, 0);

                const updateResult = await Followup.updateOne(
                    { _id: new ObjectId(candidate._id) },
                    { $set: { PayBackDays: newPayBackDays, lastUpdated: currentDate } }
                );

                console.log(`Updated PayBackDays for candidate: ${candidate._id}, New PayBackDays: ${newPayBackDays}`);
            } else {
                console.log(`Candidate ${candidate._id} has not yet reached the DOJ. Skipping update.`);
            }
        }
    } catch (error) {
        console.error('Error updating payback days:', error);
    }
}

module.exports = updatePayBackDays;
