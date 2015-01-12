var express = require('express');
var router = express.Router();

/* GET home page.*/ 
router.get('/', function(req, res) {
	
	 res.render('index', { title: 'hello' });

});
router.post('/h', function(req, res) {
 var read = function(req,res){
		var fs = require('fs');
        console.log('####', __dirname);
		var arr = [];
		var userPwd = [];
        var f = 0;
		var username = req.body.username;
		var pwd = req.body.pwd;
        fs.readFile(__dirname + '/user.txt','utf-8',function (err, data) { 
        	arr = data.toString().split("\n");
        	for(var i in arr){
        		userPwd = arr[i].split("=");
        		if((username === userPwd[0]) && (pwd === userPwd[1])){
                    f = 1;
                }
            }
                if(f === 1){
        			 res.redirect("/html/testhtml.html");
                         res.end(); 
        		}
        		else{
        			res.write("Incorrect username  or password");
        			     res.end();	

        	}
         console.log(""+data);     
        		
        });
	};
    read(req,res)

});


module.exports = router;
