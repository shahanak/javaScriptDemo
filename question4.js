var array_even = function(num){
	var numbrstring = num.toString();
var arr=[];
     for(var i = 0; i<numbrstring.length; i++){
	   arr[i] = numbrstring.charAt(i);
}

	for(var i = 0; i<arr.length; i++){
		if((arr[i]%2 === 0) && (arr[i+1]%2 === 0)){
			for(var j = arr.length; j>i+1; j--){
				arr[j]=arr[j-1];
		}
		arr[i+1]='-';

			}
		
	}
var result_array = arr.join("");
console.log(result_array);
}
var num = 245467;
array_even(num);