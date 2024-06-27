const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv').config()
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes')
const adminauthRoute = require('./routes/adminauthRoute')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use('/api/user', authRoutes);
app.use('/api/admin', adminauthRoute)

app.listen(3000, ()=>{
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>console.log("Db connection established"))
    .catch((err)=>console.log(err));
});
