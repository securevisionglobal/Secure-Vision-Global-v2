const express = require("express");
const router = express.Router();

// Importing the controller
const {
  register,
  registerUser,
  login,
  logout,
} = require("../controllers/adminauthController");

// Route to register a new user

router.post("/register-user", registerUser);

// Route to register a new admin

router.post("/register", register);

// Route to login an admin

router.post("/login", login);

// Route to logout an admin

router.post("/logout", logout);

module.exports = router;
