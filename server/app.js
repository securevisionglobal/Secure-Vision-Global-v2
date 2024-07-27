const express = require('express');
const mongoose  = require('mongoose');
const app = express();
require('dotenv').config()
const cookieParser = require('cookie-parser');
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const adminauthRoute = require('./routes/adminauthRoute')
const jobPostsRoute = require('./routes/jobPostsRoute')
const addCompanyRoute = require('./routes/addCompanyRoute')
const candidateRoute = require('./routes/candidateRoute')
const updatePayBackDays = require('./utils/updatePayback')
const cron = require('node-cron')
const allowedOrigins = [
    'http://localhost:5173',
    'https://secure-vision-global-v2.onrender.com'
];


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));


cron.schedule('0 0 * * *', () => {
    updatePayBackDays();
})
app.use('/api/user', authRoutes);
app.use('/api/admin', adminauthRoute)
app.use('/api/jobposts', jobPostsRoute)
app.use('/api/companyname', addCompanyRoute)
app.use('/api/candidates', candidateRoute)



app.listen(5000, ()=>{
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>console.log("Db connection established"))
    .catch((err)=>console.log(err));
});
