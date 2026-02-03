import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; // 1. Add this import

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // 2. Use cookie-parser middleware

// Test route

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);

// 404 Error handling middleware
app.use((req, res, next) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// General error handling middleware
// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  console.error(`[${req.method}] ${req.path} >> Error: ${err.message}`);

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    path: req.path,
    method: req.method,
    // Only show stack trace in development mode
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
