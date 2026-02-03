import express from "express";
import {
  login,
  logout,
  signup,
  refreshToken,
  getProfile,
} from "../controllers/auth.controller.js";
// import { protectRoute } from "../middleware/auth.middleware.js";
import { protectRoute } from "./../middleware/auth.middleware.js";

const router = express.Router();

// @route   POST /api/auth/login
// @desc    Authenticate user and get token
// @access  Public
router.post("/signup", signup);

// @route   POST /api/auth/login
// @desc    Authenticate user and get token
// @access  Public
router.post("/login", login);

// @route   POST /api/auth/logout
// @desc    Logout user
// @access  Private
router.post("/logout", logout);

// @route   POST /api/auth/refresh-token
// @desc    Refresh access token
// @access  Public
router.post("/refresh-token", refreshToken);

// @route   GET /api/auth/profile
// @desc    Get user profile
// @access  Private
router.get("/profile", protectRoute, getProfile);

export default router;
