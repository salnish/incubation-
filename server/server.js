const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const colors = require('colors')
const connectDB = require('./config/db');
const morgan = require('morgan');

connectDB();



const app = express();

app.use(express.json());
app.use (express.urlencoded({extended:false}));
app.use(morgan('dev'))




app.listen(port, ()=> console.log(`Server started on port ${port}`.yellow))