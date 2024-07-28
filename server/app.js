const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const adminauthRoute = require("./routes/adminauthRoute");
const jobPostsRoute = require("./routes/jobPostsRoute");
const addCompanyRoute = require("./routes/addCompanyRoute");
const candidateRoute = require("./routes/candidateRoute");
const updatePayBackDays = require("./utils/updatePayback");
const cron = require("node-cron");
// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://secure-vision-global-v2.onrender.com",
// ];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://secure-vision-global-v2.onrender.com",
    ],
    credentials: true,
  })
);

cron.schedule("0 0 * * *", () => {
  updatePayBackDays();
});
app.use("/api/user", authRoutes);
app.use("/api/admin", adminauthRoute);
app.use("/api/jobposts", jobPostsRoute);
app.use("/api/companyname", addCompanyRoute);
app.use("/api/candidates", candidateRoute);

app.listen(5000, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Db connection established"))
    .catch((err) => console.log(err));
});
