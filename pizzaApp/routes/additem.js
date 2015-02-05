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

var itemSchema = mongoose.model('item', item);
router.post('/', function (req, res) {
    console.log(req.body);
     res.header("Access-Control-Allow-Origin", "http://localhost:9001"); 
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With"); 
      var post = new itemSchema(req.body);

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


module.exports = router;
