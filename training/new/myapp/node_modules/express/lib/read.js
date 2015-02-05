var hello = {
	read:function(){
		var fs = require('fs');
        fs.readFile('user.txt',function (err, data) {
         if (err) throw err;
         console.log(""+data);     
        });
	}

};
hello.read();
module.exports = hello;