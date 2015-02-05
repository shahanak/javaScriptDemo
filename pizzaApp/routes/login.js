var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 

var Schema = mongoose.Schema;
var login = new Schema({
    fname: String,
    lname:String,
    mobile:Number,
    email:String,
    password :String,
    aline1:String,
    aline2:String,
    city:String,
    state:String,
    pincode:Number   
   
},{collection : 'registration'});

var loginSchema = mongoose.model('login', login);
router.post('/', function (req, res) {
    console.log(req.body.email);
     res.header("Access-Control-Allow-Origin", "http://localhost:9001"); 
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With"); 
      loginSchema.find({email:req.body.email,password:req.body.password}, function (err, docs) {         
            res.json(docs);
        });
});


module.exports = router;
