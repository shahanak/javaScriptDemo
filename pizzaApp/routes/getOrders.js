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


   var vieworder = mongoose.model('vieworders', orderSchema);  
router.get('/', function (req, res) {
    console.log(req.body);
     res.header("Access-Control-Allow-Origin", "http://localhost:9001"); 
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With"); 
      vieworder.find({}, function (err, docs) {         
            res.json(docs);
        });
});


module.exports = router;
