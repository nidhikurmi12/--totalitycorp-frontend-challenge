import express from "express";
import dotenv from "dotenv";
import dbconnect from "./config/Db.js";
import morgan from "morgan";
import authroute from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryroutes.js";
import cors from "cors";
import path from "path"
import productRoutes from "./routes/productRoutes.js";

const app = express();

//cors enable
app.use(cors());

//db connection
dbconnect();
//config dotenv
dotenv.config();

//middleares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname,'./client')))

//Routes
app.use("/api/v1/auth", authroute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/products", productRoutes);


//Port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
