var secLowLarge = function(arr){

if(arr.length===1){
	console.log("Second Largest=",arr[0]);
		console.log("Second Lowest=",arr[0]);

}else
{

	for(var i = 0; i<arr.length-1; i++){
		for(var j = 0; j<arr.length-1; j++){

			if(arr[j]>arr[j+1]){

			var temp =arr[j];
			arr[j]=arr[j+1];
			arr[j+1]=temp;

			}

			
	}
		}


		console.log("Second Largest=",arr[arr.length-2]);
		console.log("Second Lowest=",arr[1]);
}
}
secLowLarge([12]);
