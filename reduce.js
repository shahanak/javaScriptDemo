function reduce(arr,fn,prev){
	for(var i = 0; i<arr.length; i++){
		prev = fn(prev,arr[i]);
	}
	return prev;
}
var sum = reduce([10,20,30] , function(prev,current){ return prev + current;} , 0);
console.log("sum = ", sum);