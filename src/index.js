import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import tasksRoutes from "./routes/tasks.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/tasks", tasksRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db &  listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
