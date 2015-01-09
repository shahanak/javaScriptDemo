(function(){    
	var change = function(str){
       var arr = str.split("");     
       for(var i = 3; arr[i] != '@'; i++)
       {
         arr[i] = '.';
       }     
       console.log(arr.join(""));
	}
	var mailId = "shahana@gmail.com";
	change(mailId);
}()); 