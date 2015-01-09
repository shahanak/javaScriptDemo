var hello = {
	read:function(response){
		var fs = require('fs');
        fs.readFile('testhtml.html',function (err, data) {
         if (err) throw err;
        response.write(data);
        response.end();	
        });
	}

};
module.exports = hello;