var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var orderSchema = new Schema({
     user:Object,
     items:Array, 
     date:String,     
     amount:Number,
     status:String   
},{collection : 'orders'});


   var order = mongoose.model('orders', orderSchema);  
   router.post('/', function (req, res) {
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        var post = new order(req.body);

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
