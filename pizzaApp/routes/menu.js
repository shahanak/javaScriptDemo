var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 

var Schema = mongoose.Schema;
var item = new Schema({
    name: String,   
    description:String,
    type:String,
    size:String,
    image:String,
    price:Number   
   
},{collection : 'item'});

var items = mongoose.model('items', item);
router.get('/', function (req, res) {
    console.log(req.body);
     res.header("Access-Control-Allow-Origin", "http://localhost:9001"); 
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With"); 
      items.find({}, function (err, docs) {         
            res.json(docs);
        });
});


module.exports = router;
