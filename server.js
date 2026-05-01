import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Pool } from "pg";
import dotenv from "dotenv";
import { protect } from "./middlewares/Middleware.js";

import ItemRoutes from "./routes/ItemRoutes.js";
import AdminRoutes from "./routes/AdminRoutes.js";
import AuthRoutes from "./routes/AuthRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;


const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
});

client.connect()
  .then(() => console.log("DB connected!"))
  .catch(err => console.error("DB connection error:", err));


app.use(express.json());

// DB middleware
app.use((req, res, next) => {
  req.db = client;
  next();
});

// API ROUTES FIRST
app.use("/api/items", ItemRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/api/auth", AuthRoutes);

// STATIC FILES
app.use(express.static(path.join(__dirname, "dist")));

// SAFE FALLBACK (IMPORTANT FIX)
app.get("/{*splat}", (req, res) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ error: "API not found" });
  }
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});