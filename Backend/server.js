import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

// middlewares for routes
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messagesRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running at port ${port}`);
});
