var changeCase = function(str){
var arr = str.split("");
for(var i = 0; i<arr.length; i++){
	if(arr[i] === arr[i].toUpperCase()){
		   
		arr[i] = arr[i].toLowerCase();		

	}
	else{

        
		arr[i] =  arr[i].toUpperCase();

     
	}
}
return arr.join("");

}
var string = changeCase("Aaaa");
console.log(string);