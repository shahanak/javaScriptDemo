var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var registerSchema = new Schema({
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


   var register = mongoose.model('registration', registerSchema);  
   router.post('/', function (req, res) {
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        var post = new register(req.body);

        post.save(function (err) {
         if (err) {
               return err;
         }
         else { 
           console.log("Post saved");
         }
        });
       console.log("Inside.....");
});
   
  
module.exports=router;
