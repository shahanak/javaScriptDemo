var array = [1,2,1,3,4,3];
var newarry = [];
var obj = array.reduce(function(prev,current){prev[current]=(prev[current]||0)+1;return prev},{});
for(var i in obj){
	if(obj[i]===1)
	{
newarry.push(i);
	}
}
console.log(newarry);