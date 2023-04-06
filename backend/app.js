import express from 'express'
const session = require('express-session')
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const passport = require('passport')
const passportLocal = require('passport-local').Strategy;



const app = express();


app.use("/",(req,res,next) =>{
    res.send("Hello World")
})


//post route
const postsRouter = require('./routes/posts');

app.use('/posts', postsRouter);


app.listen(5000)