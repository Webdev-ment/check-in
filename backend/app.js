let express = require('express');
let path = require('path');
require('dotenv').config()
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://checin:Ch3c%21n@node-rest-checin.21vtxg7.mongodb.net/?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true');





let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let appointmentsRouter = require('./routes/appointments');
let prescriptionRouter = require('./routes/prescription');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Handling CORS
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //res.setHeader("Access-Control-Allow-Headers", "Authorization");
    next();
});

//The system routes
app.use('/', indexRouter);
app.use('/users', usersRouter); //http:localhost:4000/users
app.use('/appointments', appointmentsRouter);
app.use('/prescription', prescriptionRouter);




//error handling
app.use((req, res, next ) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
