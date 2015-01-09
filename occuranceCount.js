var sentences = ["i am India","India is my Country","India is Beautiful"];
var obj = sentences.join(" ").split(" ").reduce(function(prev,current){
	prev[current]=(prev[current]||0)+1;
	return prev;
},{});
console.log(obj);