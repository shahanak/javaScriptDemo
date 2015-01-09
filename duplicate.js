var array = [1,2,1,4,2,8,8,5,2];
var obj = array.reduce(function(prev,current){prev[current]=(prev[current]||0)+1;return prev},{});
var arr = [];

for(var i in obj){
	if(obj[i]>1)
	{
		arr.push(i);
	}
}
console.log(arr);
