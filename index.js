import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import orderRoute from "./routes/orderRoute.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
const dbuser = encodeURIComponent(process.env.DB_NAME);
const dbpass = encodeURIComponent(process.env.DB_PASS);
// mongoose
//   .connect("mongodb://localhost:27017/grietdb")
//   .then(() => {
//     app.listen(8080, () => {
//       console.log("Server is running on port 8080");
//     });
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });
mongoose
  .connect(
    `mongodb+srv://${dbuser}:${dbpass}@cluster0.hhnecxm.mongodb.net/grietdb?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);
