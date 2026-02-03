import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

// ioredis connects automatically upon instantiation
export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

redis.on("connect", () => {
  console.log("✅ Redis connected successfully");
});

redis.on("error", (err) => {
  console.error("❌ Redis connection error:", err);
});
