var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var holographsRouter = require('./routes/holographs');
// Import the grid router
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var Holograph = require("./models/Holograph");
var resourceRouter = require('./routes/resource');



var app = express();

async function recreateDB() {
    // Delete everything
    await Holograph.deleteMany();
    let instance1 = new
        Holograph({
            holograph_name: "ghost", creator: 'ABC',
            edition_number: 1
        });
    let instance2 = new
        Holograph({
            holograph_name: "ghost", creator: 'ABC',
            edition_number: 2
        });
    let instance3 = new
        Holograph({
            holograph_name: "ghost", creator: 'ABC',
            edition_number: 3
        });
    instance1.save().then(doc => {
        console.log("First object saved")
    }
    ).catch(err => {
        console.error(err)
    });
}
let reseed = true;
if (reseed) { recreateDB(); }




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);


//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
  console.log("Connection to DB succeeded")
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/holographs', holographsRouter);
// Use the grid router for the /grid endpoint
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/Holograph',Holograph)
app.use('/resource',resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
