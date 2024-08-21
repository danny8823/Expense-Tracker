const express = require('express');
const mongoose = require('mongoose')
const userRouter = require('./routes/userRouter');
const errorHandler = require('./middlewares/errorHandlerMiddleware');
const cors = require('cors');
const categoryRouter = require('./routes/categoryRouter');
const transactionRouter = require('./routes/transactionRouter')
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

//! Cors config
const corsOptions = {
    origin: ["http://localhost:5173"],
  };
  
app.use(cors(corsOptions));

// ! ============= Middlewares ===================
app.use(express.json()) //? PASS INCOMING JSON DATA

// ! Routes
app.use('/', userRouter);
app.use('/', categoryRouter);
app.use('/', transactionRouter);

// ? Error handler middleware
app.use(errorHandler)

// ! START THE SERVER
const PORT = 8000

app.listen(PORT,() => {
    console.log(`SERVER STARTED ON ${PORT}......`);
});

