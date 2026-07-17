const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");

// Register a new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Get logged-in user's profile
router.get("/profile", protect, getUserProfile);

module.exports = router;