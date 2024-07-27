const express = require("express");
const router = express.Router();

// Importing the controller
const {
  register,
  registerUser,
  deleteUser,
  getallUsers,
  login,
  logout,
} = require("../controllers/adminauthController");
const verifyAdmin = require("../middlewares/verifyAdmin");


// Route to register a new user
router.post("/register-user", verifyAdmin, registerUser);

// Route to delete a user
router.delete("/delete-user/:empId", verifyAdmin, deleteUser);

// Route to get all users
router.get("/getallusers",  getallUsers);

//Route to register a new admin
router.post("/register", register);

// Route to login an admin
router.post("/login", login);

// Route to logout an admin
router.post("/logout", logout);
router.get("/verify-admin-token", verifyAdmin, (req, res)=>{
  res.status(200).json({success: true ,message: "Admin token is valid"});
});

module.exports = router;
