
var sentence = "Web Development Tutoral";
var large = sentence.split(" ").reduce(function(prev,current){ 
	if(prev.length > current.length){
		return prev;}
		else
			{
				return current;
			}
		},' ');
console.log("Largest Word=",large);