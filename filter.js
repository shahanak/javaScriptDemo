function filter(arr,fun){
	var even = [];
	for(var i = 0; i<arr.length; i++){
		if(fun(arr[i])){
			even.push(arr[i]);
		}

	
}
return even;
}
var evenNum = filter([1,2,3,4,5],function(element){return (element%2 === 0) ; });
console.log(evenNum);