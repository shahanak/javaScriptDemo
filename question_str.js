var alphaOrder = function(string)
{
	var array = [];
	for(var i = 0; i< string.length; i++){
		array[i] = string.charAt(i);
	}
	for(var i = 0; i<array.length-1; i++){
		for(var j = 0; j<array.length-1; j++){
			if(array[j]>array[j+1]){
				var temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
var res = array.join("");
console.log(res);

}
alphaOrder("webmaster");