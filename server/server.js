const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const colors = require('colors')
const cors = require('cors');
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require('./config/db');
const morgan = require('morgan');
const userRouter = require ('./routes/userRoute');
const adminRouter = require('./routes/adminRoute')

connectDB();



const app = express();
app.use(cors())
app.use(morgan('dev'))


app.use(express.json());
app.use (express.urlencoded({extended:false}));

app.use("/api/users",userRouter);
app.use("/api/admin",adminRouter)


app.use(errorHandler);

app.listen(port, ()=> console.log(`Server started on port ${port}`.yellow))