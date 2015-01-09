function map(arr,fun){
	var square = [];
	for(var i =0; i<arr.length; i++){
		square[i] = fun(arr[i]); 
	}
	return square;
}
var square = map([1,2,3],function(element){ return element*element});
console.log(square);