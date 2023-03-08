import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"

//config env
dotenv.config();
//databse config
connectDB();


//rest object
const app=express();


//middle were
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);

//rest api
app.get("/",(req,res)=>{
    res.send({
        message:"Welcome to e-commerce Application"
    });

})

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`.cyan.white);
})