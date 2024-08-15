const express = require('express');
const mongoose = require('mongoose')
const userRouter = require('./routes/userRouter');
const app = express()
const URL = 'mongodb+srv://dannyyoo714:Jesuschrist8823!@tracker.dc11u.mongodb.net/'

// ! Connect to mongoDB
mongoose
    .connect(URL)
    .then(()=>{
        console.log('DB connected..')
    })
    .catch((e)=>{
        console.log(e)
    })

// ! Middlewares
app.use(express.json()) //? PASS INCOMING JSON DATA

// ! Routes
app.use('/', userRouter);

// ! START THE SERVER
const PORT = 8000

app.listen(PORT,() => {
    console.log(`SERVER STARTED ON ${PORT}......`);
});

