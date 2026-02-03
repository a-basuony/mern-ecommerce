import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

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

export default router;
