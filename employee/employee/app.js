var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var registration = require('./routes/registration');

var app = express();
mongoose.connect('mongodb://localhost/jesna', function (error) {
    if (error) {
        console.log(error);
            }
});
var Schema = mongoose.Schema;
var employeeSchema = new Schema({
    name: String,
    age: String
   
},{collection : 'employee'});
var Employee = mongoose.model('employee', employeeSchema);
app.get('/employee', function (req, res) {
     res.header("Access-Control-Allow-Origin", "http://localhost:9001"); 
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With"); 
    Employee.find({}, function (err, docs) {  
   
        res.json(docs);
    });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
