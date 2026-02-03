import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

export const redis = createClient({
  url: process.env.UPSTASH_REDIS_URL, // Changed from UPSTASH_REDIS_REST_URL
});

redis.on("error", (err) => {
  console.error("Redis Client Error", err);
});

// Don't connect/disconnect immediately - let the app handle it
export const connectRedis = async () => {
  try {
    await redis.connect();
    console.log("✅ Redis connected successfully");
  } catch (error) {
    console.error("❌ Redis connection error:", error.message);
  }
};

// Don't disconnect here - it will disconnect immediately
// await redis.disconnect();
